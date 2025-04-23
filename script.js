// Sticky Header Verhalten
let lastScrollY = window.scrollY;
const header = document.querySelector('header');

window.addEventListener('scroll', () => {
  if (window.scrollY > lastScrollY) {
    header.style.top = '-80px';
  } else {
    header.style.top = '0';
  }
  lastScrollY = window.scrollY;
});

// Hamburger Menü
const toggle = document.getElementById('menu-toggle');
const menu = document.getElementById('menu');

toggle.addEventListener('click', () => {
  menu.classList.toggle('active');
});