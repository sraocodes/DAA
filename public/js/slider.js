// TextAppear class
class TextAppear {
    constructor(el) {
        this.el = el;
        this.update = this.update.bind(this);
    }

    setText(newText) {
        this.text = newText;
        this.el.innerText = ''; // Clear the existing text
        this.index = 0; // Start from the first character
        cancelAnimationFrame(this.frameRequest);
        this.update();
    }

    update() {
        if (this.index < this.text.length) {
            let charToAdd = this.text[this.index];
            if (charToAdd === ' ') {
                charToAdd = '&nbsp;'; // Use a non-breaking space for spaces
            }
            this.el.innerHTML += charToAdd; // Use innerHTML instead of innerText
            this.index++;
            setTimeout(() => {
                this.frameRequest = requestAnimationFrame(this.update);
            }, 30);  // Delay between each character appearing
        }
    }
    
}

document.addEventListener('DOMContentLoaded', function() {
    let cards = document.querySelectorAll('.card');
    let windowHeight = window.innerHeight;

    // Create an instance of TextAppear for each h2
    const appeares = Array.from(cards).map(card => {
        const h2 = card.querySelector('h2');
        return h2 ? new TextAppear(h2) : null;
    });

    function checkPosition() {
        let delay = 0;
    
        cards.forEach((card, index) => {
            const cardPosition = card.getBoundingClientRect().top;
            
            if (cardPosition - windowHeight <= 0 && !card.classList.contains('in-view')) {
                delay += 0.1;
                card.style.transitionDelay = `${delay}s`;
                card.classList.add('in-view');
    
                // Display the h2 heading of this card letter by letter if it exists
                if (appeares[index]) {
                    // Only display if it hasn't been displayed before
                    if (!card.classList.contains('appeared')) {
                        let originalText = card.querySelector('h2').textContent;
                        appeares[index].setText(originalText);
                        card.classList.add('appeared');
                    }
                }
            }
        });
    }

    // Initial check to animate cards that are already in view
    checkPosition();

    window.addEventListener('scroll', checkPosition);
    window.addEventListener('resize', checkPosition);
});
