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

  // ▶️ Pornim melodia la primul click oriunde pe pagină (pentru Firefox etc.)
  window.addEventListener("click", () => {
    if (!audioPlaying) {
      audio.play().then(() => {
        audioPlaying = true;
      }).catch(e => {
        console.log("Redarea la click a eșuat:", e);
      });
    }
  }, { once: true });
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
