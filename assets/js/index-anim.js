const animSong = document.querySelector(".index-anim-song");
const animAlbum = document.querySelector(".index-anim-album");

spanCharacters(animSong);
spanCharacters(animAlbum);
const indexAnimation = anime
  .timeline({ autoplay: false })
  .add({
    targets: ".index-anim-song span",
    scale: [4, 1],
    opacity: [0, 1],
    translateZ: 0,
    easing: "easeOutExpo",
    duration: 950,
    delay: (el, i) => 80 * i
  })
  .add({
    targets: ".index-anim-album span",
    scale: [4, 1],
    opacity: [0, 1],
    translateZ: 0,
    easing: "easeOutExpo",
    duration: 950,
    delay: (el, i) => 1700 + 70 * i
  });

Object.defineProperty(HTMLMediaElement.prototype, "playing", {
  get: function() {
    return !!(
      this.currentTime > 0 &&
      !this.paused &&
      !this.ended &&
      this.readyState > 2
    );
  }
});

const video = document.getElementById("myVideo");
var x = setInterval(videoStatus, 100);
function videoStatus() {
  if (video.playing) {
    clearInterval(x);
    setTimeout(indexAnimation.play, 5475);
  }
}

/****************************/
/*       Video Controls     */
/****************************/
const userVolume = document.getElementById("volume");
const playBtn = document.getElementById("video-play");
const restartBtn = document.getElementById("video-restart");

playBtn.addEventListener("click", playPause);

userVolume.addEventListener("input", volumeControl);
restartBtn.addEventListener("click", restartVideo);
video.addEventListener("canplay", videoReady);

async function videoReady() {
  try {
    await video.play();
  } catch (err) {
    console.log(err.message);
  }
}

function playPause() {
  if (video.paused) {
    playBtn.children[0].classList.remove("fa-play");
    playBtn.children[0].classList.add("fa-pause");
    video.play();
    indexAnimation.play();
  } else {
    playBtn.children[0].classList.remove("fa-pause");
    playBtn.children[0].classList.add("fa-play");
    video.pause();
    indexAnimation.pause();
  }
}

function volumeControl(e) {
  video.muted = false;
  video.volume = e.target.value / 100;
}

function restartVideo(e) {
  video.currentTime = 0;
  indexAnimation.restart();
  indexAnimation.pause();

  let y = setInterval(videoStatus, 100);
  if (!video.playing) {
    clearInterval(y);
  }
}
