let crash = new Audio("sounds/crash.mp3");

// une liste de couleurs
let colors = ["#7cabf4", "#7ed06a", "#ff957a", "#efb355", "#ff8e2b", "#b893ed"];

function pickRandomColor() {
  return colors[Math.floor(Math.random() * colors.length)];
}

function playSound(instrument) {
  if (instrument.currentTime > 0) {
    instrument.currentTime = 0;
  }
  instrument.play();
}
