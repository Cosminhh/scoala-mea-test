let audioPlaying = false;

// Preluăm elementul <audio> din HTML
const audio = document.getElementById("bg-music");

// Setăm volumul inițial
if (audio) {
  audio.volume = 0.5;

  // Încercăm redarea automată la încărcarea paginii
  window.addEventListener("DOMContentLoaded", () => {
    if (!audioPlaying) {
      audio.play().then(() => {
        audioPlaying = true;
      }).catch(e => {
        console.log("Autoplay blocat de browser:", e);
      });
    }
  });
}

// Funcție apelată de butonul 🔊 din meniu
function toggleAudio() {
  if (!audio) return;

  if (audio.paused) {
    audio.play().catch(e => {
      console.log("Redarea a eșuat:", e);
    });
  } else {
    audio.pause();
  }
}
