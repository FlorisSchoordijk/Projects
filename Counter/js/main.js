//  Counter
var count = 0;
var counter = document.getElementById("counter");
counter.innerText = count;


var redButton = document.getElementById("button--red");
redButton.onclick = function () {
    if (count > -10)
        count -= 1;
    else {
        count = 0;
    }
    counter.innerText = count;
}

var greenButton = document.getElementById("button--green");
greenButton.onclick = function () {
    if (count < 10)
        count += 1;
    else {
        count = 0
    }
    counter.innerText = count;
}

// Stopwatch

var minutes = 0;
var seconds = 0;
var everySecond;
var watch = document.getElementById("stopwatch");
watch.innerText = minutes + ":0" + seconds;

var start = document.getElementById("button--start");
start.onclick = function(){
// elke seconde iets uitvoeren
    everySecond = setInterval(function () {
    seconds += 1;
    if(seconds > 60){
        seconds = 0;
        minutes += 1;
    }
    if (seconds > 9) {
        watch.innerText = minutes + ":" + seconds;
    }
    else{
    watch.innerText = minutes + ":0" + seconds;
    }
}, 1000)
}

var stop = document.getElementById("button--stop");
stop.onclick = function(){
    clearInterval(everySecond);
}