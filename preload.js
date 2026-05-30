const { contextBridge } = require("electron");

// Expondo uma API simples para o frontend saber que está rodando dentro do Electron
contextBridge.exposeInMainWorld("electronAPI", {
  isElectron: true,
  platform: process.platform
});

window.addEventListener("DOMContentLoaded", () => {
  console.log("Checklist ENEM: Preload carregado com sucesso!");
});
