class CountdownTimer {
    constructor(TimeLength) {
        this.TimerLength = TimeLength;
        this._SetSettings();
    }

    SetTimerLength(Length) {
        this.TimeLeft = Length;
    }

    Start(Update) {
        if (this.TimerIsRunning || this.TimeLeft === null) {
            return;
        }

        if (this.TimeLeft === 0) {
            this.TimeLeft = this.TimerLength;
        }

        this.TimerIsRunning = true;
        this.TimeStarted = Date.now();
        this.LastTick = this.TimeStarted;
        this.Interval = setInterval(Update, this.IntervalSpeed);
    }

    Pause() {
        clearInterval(this.Interval);
        this.TimerIsRunning = false;
    }

    Stop() {
        clearInterval(this.Interval);
        this._SetSettings();
    }

    Tick() {
        let tick = Date.now();
        this.TimeLeft -= tick - this.LastTick;
        this.LastTick = tick;

        if (this.TimeLeft <= 0) {
            this.TimeLeft = 0;
            this.TimerIsRunning = false;
            this.Done = true;
            this.Pause();
        }
    }

    _SetSettings() {
        this.Interval = null;
        this.IntervalSpeed = 250;

        this.TimerIsRunning = false;
        this.TimeLeft = this.TimerLength;
        this.TimeStarted = null;
        this.LastTick = null;

        this.Done = false;
    }
}