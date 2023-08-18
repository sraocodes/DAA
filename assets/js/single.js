// single.js

document.addEventListener('DOMContentLoaded', () => {
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
});
