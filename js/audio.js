
function toggleAudio() {
  const audio = document.getElementById("background-audio");
  if (audio.paused) {
    audio.play();
  } else {
    audio.pause();
  }
}
