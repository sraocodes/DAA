document.addEventListener('DOMContentLoaded', function() {
  let cards = document.querySelectorAll('.card');
  let windowHeight = window.innerHeight;

  function checkPosition() {
      for (let card of cards) {
          let cardPosition = card.getBoundingClientRect().top;

          if (cardPosition - windowHeight <= 0) {
              card.style.transform = 'translateY(0px)';  // Move to original position
              card.style.opacity = '1';  // Fade in
          }
      }
  }

  window.addEventListener('scroll', checkPosition);
  window.addEventListener('resize', checkPosition);
  window.addEventListener('load', checkPosition);
});
