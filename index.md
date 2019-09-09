---
title: Home

js: ./assets/js/index-anim.js
---


<video autoplay muted playsinline loop id="myVideo">
  <source src="./assets/video/gnr.mp4" type="video/mp4">
</video>

<div class="index-anim">
  <h2 class="index-anim-song"> Welcome to the jungle</h2>
  <h3 class="index-anim-album"> Appetite for destruction</h3>
</div>



<div class="content">

  <button id="video-play"><i class="fa fa-pause"></i></button>
    <button id="video-restart"><i class="fa fa-step-backward"></i></button>

  	<div class="volume-container">
       <span class="sound-sign">-</span>
          <input type="range" min="1" max="100" value="0"  step="1" class="volume-control" id="volume">
        <span class="sound-sign">+</span>
    </div>

</div>