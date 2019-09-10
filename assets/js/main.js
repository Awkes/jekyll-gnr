(() => {
  // Hamburgarmeny
  const burger = document.querySelector('#burger');
  const menu = document.querySelector('.navigation');
  burger.addEventListener('click', toggleMenu);

  function toggleMenu() {
    burger.classList.toggle('burger-open');
    menu.classList.toggle('show-navigation');
  }

  // Header animations
  addEventListener('load', () => {
    document.querySelector('.header-text').classList.remove('header-text-hidden');
    document.querySelector('#nav').classList.remove('nav-hidden');
  });
  
  const headerLogo = document.querySelector('#header-logo');
  const animateLogo = anime({
    targets: headerLogo,
    autoplay: false,
    loop: true,
    scale: [1,1.1]
  });
  headerLogo.addEventListener('mouseover', animateLogo.play);
  headerLogo.addEventListener('mouseout', animateLogo.pause);
})();

// Funktion för att kontrollera om ett element är i viewporten
function isElementInViewport (el) {
  var rect = el.getBoundingClientRect();
  return (
    (rect.top >= 0 && rect.top+100 <= (window.innerHeight || document.documentElement.clientHeight)) ||
    (rect.bottom >= 100 && rect.bottom <= (window.innerHeight || document.documentElement.clientHeight))
  );
}

// Delar upp bokstäver i separata spans.
function spanCharacters(el) {
  let content = '';
  for (let chr of el.textContent) {
    content += '<span>'+chr+'</span>';
  }
  el.innerHTML = content;
}