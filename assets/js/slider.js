document.addEventListener('DOMContentLoaded', function() {
    let cards = document.querySelectorAll('.card');
    let windowHeight = window.innerHeight;

    function checkPosition() {
        let delay = 0;
    
        for (let card of cards) {
            let cardPosition = card.getBoundingClientRect().top;
    
            if (cardPosition - windowHeight <= 0 && !card.classList.contains('in-view')) {
                delay += 0.1;
                card.style.transitionDelay = `${delay}s`;
                card.classList.add('in-view');
            }
        }
    }

    // Initial check to animate cards that are already in view
    checkPosition();

    window.addEventListener('scroll', checkPosition);
    window.addEventListener('resize', checkPosition);
});
