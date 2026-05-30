(function (window) {
  "use strict";

  function createProgressRepository(storage, storageKey) {
    function load() {
      try {
        const saved = JSON.parse(storage.getItem(storageKey));
        return saved && typeof saved === "object" ? saved : {};
      } catch {
        return {};
      }
    }

    function save(progress) {
      storage.setItem(storageKey, JSON.stringify(progress));
    }

    return { load, save };
  }

  window.EnemInfrastructure = {
    createProgressRepository
  };
})(window);
