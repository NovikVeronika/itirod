//export let inputTime = document.getElementById("time")
//export let startButton = document.getElementById("startTimeButton")
var secondsRemaining;
var intervalHandle;
var timeDisplay = document.getElementById("time-screen");

function invertTime() {
    // turning the seconds into mm:ss
    var min = Math.floor(secondsRemaining / 60);
    var sec = secondsRemaining - (min * 60);

    //adding a leading zero ( as a string value) if seconds less than 10
    if (sec < 10) {
        sec = "0" + sec;
    }
    //concatenating with colon

    var message = min + ":" + sec;
    //changing the display
    timeDisplay.innerHTML = message;

    // stop if counter gets to zero
    if (secondsRemaining === 0) {
        alert("DONE");
        clearInterval(intervalHandle);
        document.getElementById("time").style.display = "block";
    }
    // substracting from seconds remaining
    secondsRemaining--;

}

function startCountdown() {
    // getting contents of the minutes box
    var minutes = document.getElementById("time").value;

    // checking if input is not a number
    if (isNaN(minutes)) {
        alert("please enter a number");
        return;
    }
    //to pick how many seconds

    secondsRemaining = minutes * 60;
    // for every second, call the tick function
    intervalHandle = setInterval(invertTime,1000);
    // Then Hide the form
    document.getElementById("time").style.display = "none";
    timeDisplay.style.display="block";

}



window.onload= function () {
    let inputTime = document.getElementById("time")
    let startButton = document.getElementById("startTimeButton")
    let giveUpButton = document.getElementById("giveUpButton")
    timeDisplay.style.display="none"
    giveUpButton.style.display="none"

    startButton.onclick = function () {
        startButton.style.display="none";
        giveUpButton.style.display="block"
        startCountdown();
    }

    // inputTime.appendChild(inputTime);
    // startButton.appendChild(startButton);

}