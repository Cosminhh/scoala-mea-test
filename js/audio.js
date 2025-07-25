
let isPlaying = false;
const audio = new Audio('audio/in-randul-patru-anda-calugareanu_oqy0seBV.mp3');
audio.volume = 0.5;
audio.play();

const toggleAudio = () => {
  if (isPlaying) {
    audio.pause();
  } else {
    audio.play();
  }
  isPlaying = !isPlaying;
};
