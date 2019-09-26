class Alarm {
    constructor() {
        this.Audio = new Audio("./assets/amen.wav");
        this.Audio.loop = false;
        this.Audio.addEventListener("ended", HideStopButton);
    }

    Play() {
        this.Audio.play();
        ShowStopButton();
    }

    Stop() {
        this.Audio.pause();
        this.Audio.currentTime = 0;
        HideStopButton();
    }
}

function ShowStopButton() {
    let button = document.getElementById("StopAlarmButton");
    button.className = "";
}

function HideStopButton() {
    let button = document.getElementById("StopAlarmButton");
    button.className = "hidden";
}