document.addEventListener('DOMContentLoaded', function() {
    // Card Animation Functionality
    let cards = document.querySelectorAll('.card');
    let windowHeight = window.innerHeight;

    function checkPosition() {
        let delay = 0;

        cards.forEach((card) => {
            const cardPosition = card.getBoundingClientRect().top;
            
            if (cardPosition - windowHeight <= 0 && !card.classList.contains('in-view')) {
                delay += 0.1;
                card.style.transitionDelay = `${delay}s`;
                card.classList.add('in-view');
            }
        });
    }

    checkPosition();
    window.addEventListener('scroll', checkPosition);
    window.addEventListener('resize', checkPosition);

    // Slider Functionality
    // If you are using Bootstrap's carousel, it initializes automatically.
    // But if you need to initialize it manually or apply additional settings, you can do it here:
    $('#bannerSlider').carousel({
        // Example: Change the slide every 3 seconds
        interval: 3000
    });
});
