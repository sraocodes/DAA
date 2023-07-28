// Function to check if the "Back to Top" button should be displayed
function toggleBackToTopButton() {
  const backToTopBtn = document.getElementById('backToTopBtn');
  if (window.scrollY > 300) {
    backToTopBtn.style.display = 'block';
  } else {
    backToTopBtn.style.display = 'none';
  }

  // Calculate and set the position of the button at the midpoint of the screen
  const windowHeight = window.innerHeight;
  const buttonHeight = backToTopBtn.offsetHeight;
  const midpoint = windowHeight / 2;
  backToTopBtn.style.bottom = `${midpoint - buttonHeight / 2}px`;
}

// Function to scroll back to the top of the page smoothly
function scrollToTop() {
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

document.addEventListener('DOMContentLoaded', () => {
  // Attach scroll event listener to toggle the button visibility and position
  window.addEventListener('scroll', toggleBackToTopButton);

  // Attach click event listener to scroll back to the top when the button is clicked
  const backToTopBtn = document.getElementById('backToTopBtn');
  backToTopBtn.addEventListener('click', scrollToTop);

  // Navigation functionality
  const singleNav = document.querySelector('#single-nav');
  if (singleNav) {
    const navbarLinks = singleNav.querySelectorAll('a');
    const sections = document.querySelectorAll('section');

    navbarLinks.forEach(link => {
      link.addEventListener('click', (event) => {
        event.preventDefault();
        const targetSectionId = link.getAttribute('href');
        const targetSection = document.querySelector(targetSectionId);

        // Smooth scroll to the target section
        targetSection.scrollIntoView({ behavior: 'smooth' });

        // Apply the 'active' class to the target section
        sections.forEach(section => section.classList.remove('active'));
        targetSection.classList.add('active');
      });
    });
  }

  // Initial call to set the position of the button on page load
  toggleBackToTopButton();
});
