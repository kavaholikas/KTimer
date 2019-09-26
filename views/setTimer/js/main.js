let time = {
    "hours": { value: 0, min: 0, max: 24 },
    "minutes": { value: 0, min: 0, max: 60 },
    "seconds": { value: 0, min: 0, max: 60 }
}

function ChangeTime(e) {
    let timeField = e.getAttribute("for");
    let value = e.id === "plus"? 1 : -1;
    AddTime(timeField, value);    
}

function AddTime(timeField, value) {
    time[timeField].value += value;
    ValidateTime(timeField);
    document.getElementById(timeField).value = time[timeField].value;
}

function ValidateTime(timeField) {
    time[timeField].value = Math.max(time[timeField].value, time[timeField].min);
    time[timeField].value = Math.min(time[timeField].value, time[timeField].max);
}

function OnTimeChange(e) {
    time[e.id].value = e.value;
    ValidateTime(e.id);
    e.value = time[e.id].value;
}

function SetTime() {
    if (time.hours.value === 0 && time.minutes.value === 0 && time.seconds.value === 0) {
        return;
    }
    const { ipcRenderer } = require('electron');
    ipcRenderer.send("SET_TIME", {hours: time.hours.value, minutes: time.minutes.value, seconds: time.seconds.value});
}