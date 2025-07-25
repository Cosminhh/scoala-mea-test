
window.onload = function () {
  const music = document.getElementById("bgMusic");
  const toggleBtn = document.getElementById("audioToggle");
  let hasPlayed = false;

  // Play music only once on first load
  if (!hasPlayed) {
    music.play();
    hasPlayed = true;
  }

  toggleBtn.onclick = () => {
    if (music.paused) {
      music.play();
    } else {
      music.pause();
    }
  };
};
