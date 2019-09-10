const newsContainers = document.querySelectorAll('.news-container');

let newsAnimated = {};
function newsAnimation() {
    newsContainers.forEach(container => {
        if (isElementInViewport(container) && !newsAnimated[container.id]){
            newsAnimated[container.id] = true;
            anime.timeline().add({
                targets: '#'+container.id,
                opacity: [0,1],
                duration: 500,
                easing: 'linear'
              })
              .add({
                  targets: '#'+container.id +' .image-flex a img',
                  opacity:  [0,1],
                  scale: [0,1],
                  borderRadius: ['100%', '0%'],
                  duration: 1000,
                  easing: 'easeInOutSine',
                  loop: false,
                  delay: 100
              })
        }
    })
}



addEventListener('DOMContentLoaded', newsAnimation);
addEventListener('load', newsAnimation);
addEventListener('scroll', newsAnimation);