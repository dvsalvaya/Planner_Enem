(function (window) {
  "use strict";

  function slugify(value) {
    return value
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "")
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/^-|-$/g, "");
  }

  function topicId(area, subjectName, topicTitle) {
    return `${area.id}:${slugify(subjectName)}:${slugify(topicTitle)}`;
  }

  function getActiveArea(areas, activeAreaId) {
    return areas.find((area) => area.id === activeAreaId) || areas[0];
  }

  function getAllTopics(areas) {
    return areas.flatMap((area) => {
      if (area.disciplines) {
        return area.disciplines.flatMap((discipline) =>
          discipline.contents.flatMap((contentItem) =>
            contentItem.subcontents.flatMap((subcontent) =>
              subcontent.microcontents.map((microcontent) => ({
                ...microcontent,
                area,
                disciplineName: discipline.name,
                contentName: contentItem.name,
                subcontentName: subcontent.name,
                title: microcontent.name,
                note: microcontent.description
              }))
            )
          )
        );
      }

      return area.subjects.flatMap((subject) =>
        subject.topics.map(([title, note]) => ({
          id: topicId(area, subject.name, title),
          area,
          disciplineName: subject.name,
          contentName: subject.name,
          subcontentName: "Checklist",
          title,
          note
        }))
      );
    });
  }

  function getAreaTopics(area) {
    return getAllTopics([area]);
  }

  function getProgress(topics, completed) {
    const total = topics.length;
    const done = topics.filter((topic) => completed[topic.id]).length;
    const percent = total === 0 ? 0 : Math.round((done / total) * 100);

    return { done, total, percent };
  }

  function matchesFilters(topic, subjectName, state) {
    const isDone = Boolean(state.completed[topic.id]);
    const statusMatches =
      state.filter === "all" ||
      (state.filter === "done" && isDone) ||
      (state.filter === "pending" && !isDone);

    const normalizedQuery = state.query.toLowerCase();
    const haystack = [
      topic.title,
      topic.note,
      topic.priority,
      topic.historicalFrequency,
      topic.difficulty,
      topic.enemAppearance,
      topic.competencies,
      topic.commonErrors,
      topic.connections,
      topic.contentName,
      topic.subcontentName,
      subjectName,
      topic.area.name
    ].flat().filter(Boolean).join(" ").toLowerCase();
    const queryMatches = !normalizedQuery || haystack.includes(normalizedQuery);

    return statusMatches && queryMatches;
  }

  window.EnemDomain = {
    getActiveArea,
    getAllTopics,
    getAreaTopics,
    getProgress,
    matchesFilters,
    topicId
  };
})(window);
