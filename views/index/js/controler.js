const BrowserWindow = require("electron").remote.BrowserWindow;
const { ipcRenderer } = require("electron");

let setTimeWindow = null;

function CreateSetTimeWindow() {
    CloseSetTimeWindow();

    if (setTimeWindow !== null) {
        return;
    }

    let width = 300;
    let height = 300;

    setTimeWindow = new BrowserWindow({
        width: width,
        height: height,
        resizable: false,
        webPreferences: {
            nodeIntegration: true
        }
    });

    setTimeWindow.setMenu(null);
    setTimeWindow.loadFile("./views/setTimer/index.html");

    setTimeWindow.on("closed", () => {
        setTimeWindow = null;
    });

    ipcRenderer.on("SET_TIME_REPLY", (event, args) => {
        CloseSetTimeWindow();
        SetTime(args);
    });
}

function CloseSetTimeWindow() {
    if (setTimeWindow !== null) {
        setTimeWindow.close();
        setTimeWindow = null;
    }
}