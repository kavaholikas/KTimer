const electron = require("electron");
const { app, BrowserWindow, ipcMain } = require("electron");

let MainWindow = null;

function createWindow() {
    MainWindow = new BrowserWindow({
        width: 400,
        height: 400,
        minWidth: 400,
        minHeight: 400,
        webPreferences: {
            nodeIntegration: true
        }
    });

    MainWindow.setMenu(null);
    MainWindow.loadFile("./views/index/index.html");


    MainWindow.on("close", () => {
        MainWindow = null;
    });
}

app.on("ready", createWindow);

app.on("window-all-closed", () => {
    if (process.platform !== "darwin") {
        app.quit();
    }
});

app.on("activate", () => {
    if (MainWindow === null) {
        createWindow();
    }
});

ipcMain.on("SET_TIME", (e, args) => {
    MainWindow.webContents.send("SET_TIME_REPLY", args);
});