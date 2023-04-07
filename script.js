// define variables for timer
let startTime = 0;
let currentTime = 0;
let elapsedTime = 0;
let timerInterval;

// get HTML elements
const display = document.getElementById("display");
const startButton = document.getElementById("startButton");
const stopButton = document.getElementById("stopButton");
const resetButton = document.getElementById("resetButton");

// add event listeners to buttons
startButton.addEventListener("click", startTimer);
stopButton.addEventListener("click", stopTimer);
resetButton.addEventListener("click", resetTimer);

// function to start the timer
function startTimer() {
  if (elapsedTime === 0) {
    startTime = Date.now();
  } else {
    startTime = Date.now() - elapsedTime;
  }
  timerInterval = setInterval(updateTimer, 10);
}

// function to stop the timer
function stopTimer() {
  clearInterval(timerInterval);
  elapsedTime = currentTime;
}

// function to reset the timer
function resetTimer() {
  clearInterval(timerInterval);
  elapsedTime = 0;
  display.innerHTML = "00:00:00";
}

// function to update the timer display
function updateTimer() {
  currentTime = Date.now() - startTime;
  let minutes = Math.floor((currentTime % (1000 * 60 * 60)) / (1000 * 60));
  let seconds = Math.floor((currentTime % (1000 * 60)) / 1000);
  let milliseconds = Math.floor((currentTime % 1000) / 10);
  minutes = minutes.toString().padStart(2, "0");
  seconds = seconds.toString().padStart(2, "0");
  milliseconds = milliseconds.toString().padStart(2, "0");
  display.innerHTML = `${minutes}:${seconds}:${milliseconds}`;
}
