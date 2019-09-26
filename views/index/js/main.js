let TimerLength = 1000 * 60 * 25;
let Timer = new CountdownTimer(TimerLength);
let TimerAlarm = new Alarm();

function HandleStartPauseButton() {
    HandleStopAlarmButton();
    if (!Timer.TimerIsRunning) {
        Timer.Start(() => {
            Timer.Tick();

            Render();

            if (Timer.Done) {
                TimerAlarm.Play();
            }
        });
    } else {
        Timer.Pause();
        Render();
    }
}

function HandleStopButton() {
    HandleStopAlarmButton();
    Timer.Stop();
    Render();
}

function HandleSetTimerButton() {
    HandleStopAlarmButton();
    CreateSetTimeWindow();
}

function HandleStopAlarmButton() {
    TimerAlarm.Stop();
}

function SetTime(time) {
    Timer.Stop();

    let { hours, minutes, seconds } = time; 
    let ss = 1000 * seconds;
    let mm = 1000 * 60 * minutes;
    let hh = 1000 * 60 * 60 * hours;

    TimerLength = ss + mm + hh;
    Timer = new CountdownTimer(TimerLength);
    Render();
}

function Render() {
    document.getElementById("TimerScreen").innerText = TextHelper.MsToText(Timer.TimeLeft);
    document.getElementById("StartPauseButton").innerText = Timer.TimerIsRunning? "Pause": "Start";
}

document.addEventListener("DOMContentLoaded", Render);