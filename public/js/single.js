document.addEventListener('DOMContentLoaded', () => {
  const navbarLinks = document.querySelector('#single-nav ul');
  const sections = document.querySelectorAll('section');
  const links = navbarLinks.querySelectorAll('a');

  links.forEach(link => {
      link.addEventListener('click', (event) => {
          const targetSectionId = link.getAttribute('href');
          if (targetSectionId.startsWith('#')) {
              event.preventDefault();
              const targetSection = document.querySelector(targetSectionId);
              targetSection.scrollIntoView({ behavior: 'smooth' });
              sections.forEach(section => section.classList.remove('active'));
              targetSection.classList.add('active');
          }
      });
  });
});
