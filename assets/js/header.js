document.addEventListener('DOMContentLoaded', function() {
  const navbar = document.querySelector('.navbar');
  let lastScroll = 0;

  // Scroll handler for navbar
  window.addEventListener('scroll', () => {
      const currentScroll = window.pageYOffset;

      // Add/remove scrolled class based on scroll position
      if (currentScroll > 50) {
          navbar.classList.add('scrolled');
      } else {
          navbar.classList.remove('scrolled');
      }

      lastScroll = currentScroll;
  });

  // Dropdown hover effect for desktop
  if (window.innerWidth > 992) {
      const dropdowns = document.querySelectorAll('.dropdown');
      
      dropdowns.forEach(dropdown => {
          dropdown.addEventListener('mouseenter', function() {
              this.querySelector('.dropdown-menu').style.display = 'block';
              setTimeout(() => {
                  this.querySelector('.dropdown-menu').style.opacity = '1';
              }, 10);
          });

          dropdown.addEventListener('mouseleave', function() {
              this.querySelector('.dropdown-menu').style.opacity = '0';
              setTimeout(() => {
                  this.querySelector('.dropdown-menu').style.display = 'none';
              }, 300);
          });
      });
  }
});