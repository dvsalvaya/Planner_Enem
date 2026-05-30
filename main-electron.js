const { app, BrowserWindow, Menu } = require("electron");
const path = require("path");

function createWindow() {
  const win = new BrowserWindow({
    width: 1280,
    height: 800,
    minWidth: 800,
    minHeight: 600,
    backgroundColor: "#0d0d0d", // Evita flash branco ao abrir
    show: false, // Abre apenas quando estiver pronta
    webPreferences: {
      nodeIntegration: false,
      contextIsolation: true,
      preload: path.join(__dirname, "preload.js")
    }
  });

  // Remove o menu nativo padrão para uma aparência de app nativo premium
  Menu.setApplicationMenu(null);

  win.loadFile("index.html");

  // Mostra a janela suavemente quando carregada
  win.once("ready-to-show", () => {
    win.show();
  });

  // Habilitar DevTools com atalho caso necessário em desenvolvimento
  // win.webContents.openDevTools();
}

app.whenReady().then(() => {
  createWindow();

  app.on("activate", () => {
    if (BrowserWindow.getAllWindows().length === 0) {
      createWindow();
    }
  });
});

app.on("window-all-closed", () => {
  if (process.platform !== "darwin") {
    app.quit();
  }
});
