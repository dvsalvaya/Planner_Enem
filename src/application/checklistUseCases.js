(function (window) {
  "use strict";

  function createChecklistUseCases({ areas, domain, progressRepository }) {
    const state = {
      activeArea: areas[0].id,
      filter: "all",
      query: "",
      completed: progressRepository.load()
    };

    function persist() {
      progressRepository.save(state.completed);
    }

    function selectArea(areaId) {
      state.activeArea = areaId;
    }

    function setFilter(filter) {
      state.filter = filter;
    }

    function setQuery(query) {
      state.query = query.trim();
    }

    function toggleTopic(topicId, checked) {
      if (checked) {
        state.completed[topicId] = true;
      } else {
        delete state.completed[topicId];
      }

      persist();
    }

    function resetProgress() {
      state.completed = {};
      persist();
    }

    function getSubjectViewModels(activeArea) {
      if (activeArea.disciplines) {
        return activeArea.disciplines.map((discipline) => {
          const contents = discipline.contents.map((contentItem) => {
            const subcontents = contentItem.subcontents.map((subcontent) => {
              const topics = subcontent.microcontents.map((microcontent) => {
                const topic = {
                  ...microcontent,
                  area: activeArea,
                  disciplineName: discipline.name,
                  contentName: contentItem.name,
                  subcontentName: subcontent.name,
                  title: microcontent.name,
                  note: microcontent.description
                };

                return {
                  ...topic,
                  isDone: Boolean(state.completed[topic.id]),
                  isVisible: domain.matchesFilters(topic, discipline.name, state)
                };
              });

              return {
                ...subcontent,
                progress: domain.getProgress(topics, state.completed),
                topics,
                isVisible: topics.some((topic) => topic.isVisible)
              };
            });

            const contentTopics = subcontents.flatMap((subcontent) => subcontent.topics);

            return {
              ...contentItem,
              progress: domain.getProgress(contentTopics, state.completed),
              subcontents,
              isVisible: subcontents.some((subcontent) => subcontent.isVisible)
            };
          });

          const disciplineTopics = contents.flatMap((contentItem) =>
            contentItem.subcontents.flatMap((subcontent) => subcontent.topics)
          );

          return {
            name: discipline.name,
            progress: domain.getProgress(disciplineTopics, state.completed),
            contents,
            topics: disciplineTopics,
            isVisible: contents.some((contentItem) => contentItem.isVisible)
          };
        });
      }

      return activeArea.subjects.map((subject) => {
        const topics = subject.topics.map(([title, note]) => {
          const topic = {
            id: domain.topicId(activeArea, subject.name, title),
            area: activeArea,
            title,
            note
          };

          return {
            ...topic,
            isDone: Boolean(state.completed[topic.id]),
            isVisible: domain.matchesFilters(topic, subject.name, state)
          };
        });

        return {
          name: subject.name,
          progress: domain.getProgress(topics, state.completed),
          topics,
          isVisible: topics.some((topic) => topic.isVisible)
        };
      });
    }

    function getViewModel() {
      const activeArea = domain.getActiveArea(areas, state.activeArea);
      const allTopics = domain.getAllTopics(areas);
      const areaTopics = domain.getAreaTopics(activeArea);
      const subjects = getSubjectViewModels(activeArea);
      const visibleTopics = subjects.flatMap((subject) =>
        subject.topics.filter((topic) => topic.isVisible)
      );

      return {
        areas,
        activeArea,
        filter: state.filter,
        query: state.query,
        overallProgress: domain.getProgress(allTopics, state.completed),
        areaProgress: domain.getProgress(areaTopics, state.completed),
        areaTabProgress: areas.reduce((progressByArea, area) => {
          progressByArea[area.id] = domain.getProgress(domain.getAreaTopics(area), state.completed);
          return progressByArea;
        }, {}),
        subjects,
        hasVisibleTopics: visibleTopics.length > 0
      };
    }

    return {
      getViewModel,
      resetProgress,
      selectArea,
      setFilter,
      setQuery,
      toggleTopic
    };
  }

  window.EnemApplication = {
    createChecklistUseCases
  };
})(window);
