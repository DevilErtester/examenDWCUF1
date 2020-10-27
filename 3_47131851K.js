window.addEventListener('DOMContentLoaded', clock);

var myTimer;
function clock() {
    myTimer = setInterval(myClock, 1000);
    var c = 3600 * 2;


    function myClock() {
        --c
        var seconds = c % 60;
        var secondsInMinutes = (c - seconds) / 60;
        var minutes = secondsInMinutes % 60;
        var hours = (secondsInMinutes - minutes) / 60;


        document.getElementById('tempsRestant').textContent = (hours + ":" + minutes + ":" + seconds)
        if (c == 0) {
            clearInterval(myTimer);
            alert("THE TIME IS UP");
            c = 3600 * 2;
        }
    }
}
