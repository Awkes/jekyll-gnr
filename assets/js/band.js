(() => {
  // DOM referenser
  const bandMembers = document.querySelectorAll('.band-member');
  const bandMembersName = document.querySelectorAll('.band-member h3');
  const bandMembersInstr = document.querySelectorAll('.band-member p');
  
  // Spannar namn och info om instrument
  bandMembersName.forEach(member => spanCharacters(member));
  bandMembersInstr.forEach(member => spanCharacters(member));

  // Håller reda på om en bandmedlem blivit animerad
  let bandMemberAnimated = {};
  
  // Animerar bandmedlem
  function bandAnimation() {
    bandMembers.forEach(bandMember => {    
      if (isElementInViewport(bandMember) && !bandMemberAnimated[bandMember.id]) {
        bandMemberAnimated[bandMember.id] = true;
        if (Object.keys(bandMemberAnimated).length === bandMembers.length) { removeEventListener('scroll', bandAnimation); } // Tar bort scroll eventlistenern om alla element animerats
        anime.timeline().add({
          targets: '#'+bandMember.id+' .band-member-img',
          opacity: [0,1],
          scale: [0,1],
          duration: '300ms',
          easing: 'easeInOutExpo'
        }).add({
          targets: [
            '#'+bandMember.id+' .band-member-info h3 span',
            '#'+bandMember.id+' .band-member-info p span',
          ],
          opacity: [0,1],
          duration: 500,
          delay: (el,i) => i*30
        })
      }
    });
  }
  
  // Triggar animationerna
  addEventListener('DOMContentLoaded', bandAnimation); 
  addEventListener('load', bandAnimation);
  addEventListener('scroll', bandAnimation);
})();