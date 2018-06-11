function Showresult(m) {
    if (m != 0) {
        return m;
    }
    else
        return '';
}

function GetNoun(n, one, two, five) {
    if (n == 0) {
        return '';
    }
    if (n >= 5 && n <= 20) {
        return " " + five + " ";
    }
    n %= 10;
    if (n == 1) {
        return " " + one + " ";
    }
    if (n >= 2 && n <= 4) {
        return " " + two + " ";
    }
    return " " + five + " ";
}

var time1 = Number(process.argv[2]);
var time2 = Number(process.argv[3]);
var time;
var hours, minutes, seconds;

time = time1 + time2;
hours = Math.trunc(time / 3600);
minutes = Math.trunc((time % 3600) / 60);
seconds = (time % 3600) % 60;

process.stdout.write(Showresult(hours) + GetNoun(hours, 'час', 'часа', 'часов') +
    Showresult(minutes) + GetNoun(minutes, 'минута', 'минуты', 'минут') +
    Showresult(seconds) + GetNoun(seconds, 'секунда', 'секунды', 'секунд'));