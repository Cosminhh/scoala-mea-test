
let audioPlaying = false;
let audio = new Audio('audio/in-randul-patru-anda-calugareanu_oqy0seBV.mp3');
audio.volume = 0.5;
audio.autoplay = true;
audio.addEventListener("canplaythrough", () => {
  if (!audioPlaying) {
    audio.play();
    audioPlaying = true;
  }
});
function toggleAudio() {
  if (audio.paused) {
    audio.play();
  } else {
    audio.pause();
  }
}
