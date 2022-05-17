//export let inputTime = document.getElementById("time")
//export let startButton = document.getElementById("startTimeButton")
var secondsRemaining;
var intervalHandle;
var timeDisplay = document.getElementById("time-screen")
var minutes = document.getElementById("time").value;
let result = "";

function invertTime() {

    var min = Math.floor(secondsRemaining / 60)
    var sec = secondsRemaining - (min * 60)
    const counter = minutes * 60
    const count1 = 0.8 * counter
    const count2 = 0.6 * counter
    const count3 = 0.4 * counter
    const count4 = 0.1 * counter

    if (sec < 10) {
        sec = "0" + sec;
    }

    var message = min + ":" + sec;

    timeDisplay.innerHTML = message;
    var image = document.getElementById("image");
    var images = ["../images/1.png", "../images/2.png", "../images/3.png","../images/4.png","../images/5.png"]

    if(secondsRemaining === counter){
        image.src = images[0];
    }
    else if(secondsRemaining === count1){
        image.src = images[1];
    }
    else if(secondsRemaining === count2){
        image.src = images[2];
    }
    else if(secondsRemaining === count3){
        image.src = images[3];
    }
    else if(secondsRemaining === count4){
        image.src = images[4];
    }

    if (secondsRemaining === 0) {
        image.src = images[4]
        alert("DONE! YOU ARE AMAZING!!! YOU MADE IT!!!!")
        clearInterval(intervalHandle)
        result = "success"
        document.getElementById("time").style.display = "none"
        document.getElementById("motivation-label").style.display = "none"
        document.getElementById("saveRecordButton").style.display="block"
    }
    else{
        result = "failure"
    }
    secondsRemaining--;
}

function startCountdown() {

    if (isNaN(minutes)) {
        alert("please enter a number");
        return;
    }
    secondsRemaining = minutes * 60;
    intervalHandle = setInterval(invertTime,1000);

    document.getElementById("time").style.display = "none";
    timeDisplay.style.display="block";
}



window.onload= function () {
    let inputTime = document.getElementById("time")
    let startButton = document.getElementById("startTimeButton")
    let giveUpButton = document.getElementById("giveUpButton")
    let labels = document.getElementById("label-for-time")
    let saveButton = document.getElementById("saveRecordButton")
    timeDisplay.style.display="none"
    giveUpButton.style.display="none"
    saveButton.style.display="none"

    startButton.onclick = function () {
        startButton.style.display="none";
        giveUpButton.style.display="block"
        labels.style.display="none";
        startCountdown();
    }


    // inputTime.appendChild(inputTime);
    // startButton.appendChild(startButton);

}