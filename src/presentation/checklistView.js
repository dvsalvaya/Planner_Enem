(function (window, document) {
  "use strict";

  function createChecklistView({ useCases }) {
    const elements = {
      areaTabs: document.querySelector("#areaTabs"),
      contentGrid: document.querySelector("#contentGrid"),
      searchInput: document.querySelector("#searchInput"),
      filterButtons: document.querySelectorAll(".filter-button"),
      resetButton: document.querySelector("#resetButton"),
      overallPercent: document.querySelector("#overallPercent"),
      overallCount: document.querySelector("#overallCount"),
      overallFill: document.querySelector("#overallFill"),
      areaTitle: document.querySelector("#areaTitle"),
      areaDescription: document.querySelector("#areaDescription"),
      areaPercent: document.querySelector("#areaPercent"),
      areaCount: document.querySelector("#areaCount"),
      areaFill: document.querySelector("#areaFill"),
      emptyState: document.querySelector("#emptyState")
    };

    function renderProgress(progress, percentElement, countElement, fillElement) {
      percentElement.textContent = `${progress.percent}%`;
      countElement.textContent = `${progress.done} de ${progress.total}`;
      fillElement.style.width = `${progress.percent}%`;
    }

    function renderTabs(viewModel) {
      elements.areaTabs.innerHTML = viewModel.areas.map((area) => {
        const progress = viewModel.areaTabProgress[area.id];

        return `
          <li>
            <button class="tab-button${area.id === viewModel.activeArea.id ? " active" : ""}" type="button" data-area-id="${area.id}">
              <span class="tab-title">${area.name}</span>
              <span class="tab-meta">${progress.done}/${progress.total}</span>
            </button>
          </li>
        `;
      }).join("");

      elements.areaTabs.querySelectorAll(".tab-button").forEach((button) => {
        button.addEventListener("click", () => {
          useCases.selectArea(button.dataset.areaId);
          render();
        });
      });
    }

    function renderMeta(topic) {
      const chips = [
        topic.priority && `Prioridade: ${topic.priority}`,
        topic.historicalFrequency && `Freq.: ${topic.historicalFrequency}`,
        topic.difficulty && `Dif.: ${topic.difficulty}`,
        topic.studyTimeMinutes && `Estudo: ${topic.studyTimeMinutes}min`,
        topic.reviewTimeMinutes && `Revisao: ${topic.reviewTimeMinutes}min`
      ].filter(Boolean);

      return `
        <span class="topic-meta">${chips.map((chip) => `<span>${chip}</span>`).join("")}</span>
      `;
    }

    function renderDetails(topic) {
      const details = [
        topic.enemAppearance && `ENEM: ${topic.enemAppearance}`,
        topic.competencies && topic.competencies.length && `Competencias: ${topic.competencies.join(", ")}`,
        topic.commonErrors && topic.commonErrors.length && `Erros comuns: ${topic.commonErrors.join(", ")}`,
        topic.connections && topic.connections.length && `Conexoes: ${topic.connections.join(", ")}`
      ].filter(Boolean);

      if (!details.length) {
        return "";
      }

      return `
        <span class="topic-details">
          ${details.map((detail) => `<span>${detail}</span>`).join("")}
        </span>
      `;
    }

    function renderTopic(topic) {
      return `
        <li class="topic-item${topic.isDone ? " done" : ""}${topic.isVisible ? "" : " hidden"}">
          <input id="${topic.id}" type="checkbox" data-topic-id="${topic.id}" ${topic.isDone ? "checked" : ""}>
          <label for="${topic.id}">
            <span class="topic-title">${topic.title}</span>
            <span class="topic-note">${topic.note}</span>
            ${renderMeta(topic)}
            ${renderDetails(topic)}
          </label>
        </li>
      `;
    }

    function renderContentGroups(subject) {
      if (!subject.contents) {
        return `
          <ul class="topic-list">
            ${subject.topics.map(renderTopic).join("")}
          </ul>
        `;
      }

      return subject.contents.map((contentItem) => `
        <section class="content-block${contentItem.isVisible ? "" : " hidden"}">
          <div class="content-header">
            <h3>${contentItem.name}</h3>
            <span>${contentItem.progress.done} de ${contentItem.progress.total}</span>
          </div>
          ${contentItem.subcontents.map((subcontent) => `
            <div class="subcontent-block${subcontent.isVisible ? "" : " hidden"}">
              <div class="subcontent-title">${subcontent.name}</div>
              <ul class="topic-list">
                ${subcontent.topics.map(renderTopic).join("")}
              </ul>
            </div>
          `).join("")}
        </section>
      `).join("");
    }

    function renderContent(viewModel) {
      elements.areaTitle.textContent = viewModel.activeArea.name;
      elements.areaDescription.textContent = viewModel.activeArea.description;

      elements.contentGrid.innerHTML = viewModel.subjects.map((subject) => `
        <article class="subject-card${subject.isVisible ? "" : " hidden"}">
          <div class="subject-header">
            <h2>${subject.name}</h2>
            <span class="subject-progress">${subject.progress.done} de ${subject.progress.total}</span>
          </div>
          ${renderContentGroups(subject)}
        </article>
      `).join("");

      elements.emptyState.classList.toggle("visible", !viewModel.hasVisibleTopics);

      elements.contentGrid.querySelectorAll("input[type='checkbox']").forEach((checkbox) => {
        checkbox.addEventListener("change", (event) => {
          useCases.toggleTopic(event.target.dataset.topicId, event.target.checked);
          render();
        });
      });
    }

    function render() {
      const viewModel = useCases.getViewModel();

      renderTabs(viewModel);
      renderContent(viewModel);
      renderProgress(
        viewModel.overallProgress,
        elements.overallPercent,
        elements.overallCount,
        elements.overallFill
      );
      renderProgress(
        viewModel.areaProgress,
        elements.areaPercent,
        elements.areaCount,
        elements.areaFill
      );
    }

    function bindToolbar() {
      elements.searchInput.addEventListener("input", (event) => {
        useCases.setQuery(event.target.value);
        render();
      });

      elements.filterButtons.forEach((button) => {
        button.addEventListener("click", () => {
          useCases.setFilter(button.dataset.filter);
          elements.filterButtons.forEach((item) => {
            item.classList.toggle("active", item === button);
          });
          render();
        });
      });

      elements.resetButton.addEventListener("click", () => {
        if (!confirm("Limpar todo o progresso marcado?")) {
          return;
        }

        useCases.resetProgress();
        render();
      });
    }

    function start() {
      bindToolbar();
      render();
    }

    return { start };
  }

  window.EnemPresentation = {
    createChecklistView
  };
})(window, document);
