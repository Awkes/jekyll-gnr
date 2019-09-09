(() => {
  // DOM referenser
  const shows = document.querySelectorAll('.show-row');

  // Håller reda på om en en show blivit animerad
  let showAnimated = {};
  
  // Animerar bandmedlem
  function showAnimation() {
    shows.forEach(show => {    
      if (isElementInViewport(show) && !showAnimated[show.id]) {
        showAnimated[show.id] = true;
        if (Object.keys(showAnimated).length === shows.length) { removeEventListener('scroll', showAnimation); } // Tar bort scroll eventlistenern om alla element animerats
        show.classList.add('show-row-visible');
      }
    });
  }
  
  // Triggar animationerna
  addEventListener('DOMContentLoaded', showAnimation); 
  addEventListener('load', showAnimation);
  addEventListener('scroll', showAnimation);
})();