// Header beim Scrollen aus-/einblenden
let lastScrollY = window.scrollY;
const header = document.querySelector('header');
const menuToggle = document.getElementById('menu-toggle');
const menu = document.getElementById('menu');

// Header bewegen
window.addEventListener('scroll', () => {
  if (window.scrollY > lastScrollY) {
    header.style.top = "-80px";
  } else {
    header.style.top = "0";
  }
  lastScrollY = window.scrollY;
});

// Menü aufklappen
menuToggle.addEventListener('click', () => {
  menu.classList.toggle('active');
  menuToggle.classList.toggle('open');
});

// Glattes Scrollen
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
  });
});