let audio = new Audio("audio/in-randul-patru-anda-calugareanu_oqy0seBV.mp3");
audio.volume = 0.5;
audio.autoplay = true;
audio.setAttribute("playsinline", "");
audio.setAttribute("preload", "auto");

// Autoplay când pagina e încărcată – dacă e permis de browser
document.addEventListener("DOMContentLoaded", () => {
  audio.play().catch(() => {
    console.warn("Autoplay blocat. Așteaptă interacțiune.");
  });
});

function toggleAudio() {
  if (audio.paused) {
    audio.play();
  } else {
    audio.pause();
  }
}
