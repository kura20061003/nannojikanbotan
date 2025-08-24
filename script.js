const whatTimeButton = document.getElementById("whatTimeButton");
const whatTimeSound = document.getElementById("whatTimeSound");

whatTimeButton.addEventListener("click", () => {
  whatTimeSound.currentTime = 0;
  whatTimeSound.play();
});