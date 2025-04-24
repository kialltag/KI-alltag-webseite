// Hamburger Menu Toggle
document.getElementById('menu-toggle').addEventListener('click', function() {
  const navLinks = document.querySelector('.nav-links');
  navLinks.classList.toggle('active');
});

// AOS (Animation on Scroll) Initialisierung
AOS.init({
  duration: 800, // Dauer der Animation
  easing: 'ease-in-out', // Übergangseffekt
});
