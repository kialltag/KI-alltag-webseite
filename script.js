// DOM vollständig laden
document.addEventListener('DOMContentLoaded', function () {
  // Hamburger Menu Toggle
  const toggle = document.getElementById('menu-toggle');
  const navLinks = document.querySelector('.nav-links');

  if (toggle && navLinks) {
    toggle.addEventListener('click', function () {
      navLinks.classList.toggle('active');
    });
  }

  // AOS (Animation on Scroll) Initialisierung
  if (typeof AOS !== 'undefined') {
    AOS.init({
      duration: 800, // Dauer der Animation
      easing: 'ease-in-out', // Übergangseffekt
    });
  }
});
