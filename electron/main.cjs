const { app, BrowserWindow } = require("electron");
const path = require("path");

function createWindow() {
  const win = new BrowserWindow({
    width: 1440,
    height: 900,
    minWidth: 1100,
    minHeight: 720,
    title: "演化我的世界",
    backgroundColor: "#0b1220",
    webPreferences: {
      contextIsolation: true,
      nodeIntegration: false,
    },
  });

  if (process.argv.includes("--dev")) {
    win.loadURL("http://127.0.0.1:5173");
  } else {
    win.loadFile(path.join(__dirname, "../dist/index.html"));
  }
}

app.whenReady().then(createWindow);

app.on("window-all-closed", () => {
  app.quit();
});
