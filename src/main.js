(function (window) {
  "use strict";

  const STORAGE_KEY = "enem-checklist-progress-v1";

  const progressRepository = window.EnemInfrastructure.createProgressRepository(
    window.localStorage,
    STORAGE_KEY
  );

  const useCases = window.EnemApplication.createChecklistUseCases({
    areas: window.EnemData.expandedCurriculum || window.EnemData.studyAreas,
    domain: window.EnemDomain,
    progressRepository
  });

  const checklistView = window.EnemPresentation.createChecklistView({
    useCases
  });

  checklistView.start();
})(window);
