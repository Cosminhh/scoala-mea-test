let audio = document.createElement("audio");
audio.src = "audio/in-randul-patru-anda-calugareanu_oqy0seBV.mp3";
audio.volume = 0.5;
audio.autoplay = true;
audio.setAttribute("playsinline", "");
audio.setAttribute("preload", "auto");

document.body.appendChild(audio);

// Încearcă autoplay la încărcarea paginii
document.addEventListener("DOMContentLoaded", () => {
  audio.play().catch((e) => {
    console.warn("Autoplay blocat de browser. Va porni manual la click.");
  });
});

function toggleAudio() {
  if (audio.paused) {
    audio.play();
  } else {
    audio.pause();
  }
}
