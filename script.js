let crash = new Audio("sounds/crash.mp3");
let floortom = new Audio("sounds/floortom.mp3");
let hihat = new Audio("sounds/hihat.mp3");
let kick = new Audio("sounds/kick.mp3");
let racktom = new Audio("sounds/racktom.mp3");
let rimshot = new Audio("sounds/rimshot.mp3");
let stickshot = new Audio("sounds/stickshot.mp3");

// une liste de couleurs
let colors = ["#7cabf4", "#7ed06a", "#ff957a", "#efb355", "#ff8e2b", "#b893ed"];

function pickRandomColor() {
  return colors[Math.floor(Math.random() * colors.length)];
}

let nbPlays = 0;

function playSound(instrument) {
  if (instrument.currentTime > 0) {
    instrument.currentTime = 0;
  }
  instrument.play();

  nbPlays += 1;

  if (nbPlays == 5) {
    message.innerText = "Bravo ! Quel rythme !";
  }

  page.style.backgroundColor = pickRandomColor();
}

page.style.backgroundColor = pickRandomColor();

document.addEventListener("keydown", function(event) {
  if (event.key == "a") {
    playSound(crash);
  }
  if (event.key == "z") {
    playSound(racktom);
  }
  if (event.key == "u") {
    playSound(rimshot);
  }
  if (event.key == "q") {
    playSound(floortom);
  }
  if (event.key == " ") {
    playSound(kick);
  }
  if (event.key == "Enter") {
    playSound(stickshot);
  }
  if (event.key == "p") {
    playSound(hihat);
  }
});
