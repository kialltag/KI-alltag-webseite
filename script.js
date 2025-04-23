let lastScrollY = window.scrollY;
const header = document.querySelector('header');

window.addEventListener('scroll', () => {
  if (window.scrollY > lastScrollY) {
    // Runterscrollen – Header ausblenden
    header.classList.add('header-hidden');
  } else {
    // Hochscrollen – Header einblenden
    header.classList.remove('header-hidden');
  }
  lastScrollY = window.scrollY;
});

// Optional: Glatter Scroll für Links bleibt
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
  });
});