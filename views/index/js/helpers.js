const TextHelper = {
    MsToText: function(ms) {
        let seconds = Math.floor((ms / 1000) % 60);
        let minutes = Math.floor((ms / (1000 * 60)) % 60);
        let hours = Math.floor((ms / (1000 * 60 * 60)));

        return `${FormatHelper.DoubleDigits(hours)}:${FormatHelper.DoubleDigits(minutes)}:${FormatHelper.DoubleDigits(seconds)}`;
    }
}

const FormatHelper = {
    DoubleDigits: function(digit) {
        return digit > 9? digit: "0" + digit;
    }
}