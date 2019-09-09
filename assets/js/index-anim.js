const animSong = document.querySelector('.index-anim-song');
const animAlbum = document.querySelector('.index-anim-album');

spanCharacters(animSong);
spanCharacters(animAlbum);

function indexAnimation () {
anime.timeline()
  .add({
    targets: '.index-anim-song span',
    scale: [4,1],
    opacity: [0,1],
    translateZ: 0,
    easing: "easeOutExpo",
    duration: 950,
    delay: (el, i) => 70*i
  }).add({
    targets: '.index-anim-album span',
    scale: [4,1],
    opacity: [0,1],
    translateZ: 0,
    easing: "easeOutExpo",
    duration: 950,
    delay: (el, i) => 70*i
  });
}

addEventListener('DOMContentLoaded', indexAnimation);
addEventListener('load', indexAnimation);

/****************************/
/*       Video Controls     */
/****************************/
const video = document.getElementById("myVideo");
const userVolume = document.getElementById("volume");
const playBtn = document.getElementById("video-play");
const restartBtn = document.getElementById("video-restart");

video.load();
video.volume = 0.5;
playBtn.addEventListener("click", playPause);
userVolume.addEventListener('input', volumeControl);
restartBtn.addEventListener('click', restartVideo)

function playPause() {
    if (video.paused) {
        playBtn.children[0].classList.remove('fa-pause');
        playBtn.children[0].classList.add('fa-play');
        video.play();
    } else {
        playBtn.children[0].classList.remove('fa-play');
        playBtn.children[0].classList.add('fa-pause');
        video.pause();
    }
}

function volumeControl (e){
    video.volume = e.target.value / 100;
}

function restartVideo(e){
    video.currentTime = 0;
}