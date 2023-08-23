// TextScramble class
class TextScramble {
    constructor(el) {
        this.el = el;
        this.chars = '!<>-_\\/[]{}—=+*^?#________';
        this.update = this.update.bind(this);
    }

    setText(newText) {
        const oldText = this.el.innerText;
        const length = Math.max(oldText.length, newText.length);
        const promise = new Promise(resolve => this.resolve = resolve);
        this.queue = [];
        for (let i = 0; i < length; i++) {
            const from = oldText[i] || '';
            const to = newText[i] || '';
            const start = Math.floor(Math.random() * 50);
            const end = start + Math.floor(Math.random() * 50);
            this.queue.push({ from, to, start, end });
        }
        cancelAnimationFrame(this.frameRequest);
        this.frame = 0;
        this.update();
        return promise;
    }

    update() {
        let output = '';
        let complete = 0;
        for (let i = 0, n = this.queue.length; i < n; i++) {
            const { from, to, start, end, char } = this.queue[i];
            if (this.frame >= end) {
                complete++;
                output += to;
            } else if (this.frame >= start) {
                if (!char || Math.random() < 0.28) {
                    const randomChar = this.chars[Math.floor(Math.random() * this.chars.length)];
                    this.queue[i].char = randomChar;
                    output += `<span class="dud">${randomChar}</span>`;
                } else {
                    output += char;
                }
            } else {
                output += from;
            }
        }
        this.el.innerHTML = output;
        if (complete === this.queue.length) {
            this.resolve();
        } else {
            setTimeout(() => {
                this.frameRequest = requestAnimationFrame(this.update);
            }, 20);  // Introduce a 50ms delay
            this.frame++;
        }        
    }
}

document.addEventListener('DOMContentLoaded', function() {
    let cards = document.querySelectorAll('.card');
    let windowHeight = window.innerHeight;

    // Create an instance of TextScramble for each h2
    const scramblers = Array.from(cards).map(card => {
        const h2 = card.querySelector('h2');
        return h2 ? new TextScramble(h2) : null;
    });

    function scrambleRepeatedly(scrambler, originalText) {
        scrambler.setText(originalText).then(() => {
            setTimeout(() => {
                // Recursively call the function to achieve indefinite scrambling
                scrambleRepeatedly(scrambler, originalText);
            }, 5000);  // 5 seconds delay between scrambles
        });
    }
    
    function checkPosition() {
        let delay = 0;
    
        cards.forEach((card, index) => {
            const cardPosition = card.getBoundingClientRect().top;
            
            if (cardPosition - windowHeight <= 0 && !card.classList.contains('in-view')) {
                delay += 0.1;
                card.style.transitionDelay = `${delay}s`;
                card.classList.add('in-view');
    
                // Scramble the h2 heading of this card if it exists
                if (scramblers[index]) {
                    // Only start the indefinite scramble if it hasn't been started before
                    if (!card.classList.contains('scrambled')) {
                        let originalText = card.querySelector('h2').textContent;
                        scrambleRepeatedly(scramblers[index], originalText);
                        card.classList.add('scrambled');
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

