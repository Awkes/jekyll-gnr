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