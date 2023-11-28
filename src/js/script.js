const secondsElement = document.getElementById("seconds");
const minutesElement = document.getElementById("minutes");
const milisecondsElement = document.getElementById("miliseconds");
const startBtn = document.getElementById("startBtn");
const pauseBtn = document.getElementById("pauseBtn");
const resumeBtn = document.getElementById("resumeBtn");
const resetBtn = document.getElementById("resetBtn");

let minutes = 0;
let seconds = 0;
let miliseconds = 0;
let isPaused = false;

startBtn.addEventListener("click", starTimer);
pauseBtn.addEventListener("click", pauseTimer);
resumeBtn.addEventListener("click", resumeTimer);
resetBtn.addEventListener("click", resetTimer);

function starTimer() {
  interval = setInterval(() => {
    if (!isPaused) {
      miliseconds += 10;

      if (miliseconds === 1000) {
        seconds++;
        miliseconds = 0;
      }

      if (seconds === 60) {
        minutes++;
        seconds = 0;
      }

      minutesElement.textContent = formatTime(minutes);
      secondsElement.textContent = formatTime(seconds);
      milisecondsElement.textContent = formatMilisseconds(miliseconds);
    }
  }, 10);

  startBtn.style.display = "none";
  pauseBtn.style.display = "inline-block";
  resumeBtn.style.display = "none";
  resetBtn.style.display = "inline-block";
}

function pauseTimer() {
  isPaused = true;
  pauseBtn.style.display = "none";
  resumeBtn.style.display = "inline-block";
}

function resumeTimer() {
  isPaused = false;
  pauseBtn.style.display = "inline-block";
  resumeBtn.style.display = "none";
}

function resetTimer() {
  clearInterval(interval);
  minutes = 0;
  seconds = 0;
  miliseconds = 0;

  minutesElement.textContent = "00";
  secondsElement.textContent = "00";
  milisecondsElement.textContent = "000";

  startBtn.style.display = "inline-block";
  pauseBtn.style.display = "none";
  resumeBtn.style.display = "none";
}

function formatTime(time) {
  return time < 10 ? `0${time}` : time;
}

function formatMilisseconds(time) {
  return time < 100 ? `${time}`.padStart(3, "0") : time;
}

