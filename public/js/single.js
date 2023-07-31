document.addEventListener('DOMContentLoaded', () => {
  // Function to scroll to the top of the page smoothly
  function scrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }

  // Function to toggle the visibility of the "Back to Top" button
  function toggleBackToTopButton() {
    const backToTopBtn = document.getElementById('backToTopBtn');
    if (window.pageYOffset > 300) { // Show backToTopBtn after scrolling 300px
      backToTopBtn.style.display = 'block';
    } else {
      backToTopBtn.style.display = 'none';
    }
  }

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
        const targetSectionId = link.getAttribute('href');
        
        // Check if the link is an internal link (starts with '#')
        if (targetSectionId.startsWith('#')) {
          event.preventDefault();
          const targetSection = document.querySelector(targetSectionId);

          // Smooth scroll to the target section
          targetSection.scrollIntoView({ behavior: 'smooth' });

          // Apply the 'active' class to the target section
          sections.forEach(section => section.classList.remove('active'));
          targetSection.classList.add('active');
        }
      });
    });
  }

  // Initial call to set the position of the button on page load
  toggleBackToTopButton();
});
