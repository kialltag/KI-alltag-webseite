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

// Modal für Impressum und Datenschutz öffnen
document.getElementById('open-impressum').addEventListener('click', () => {
  document.getElementById('impressum-modal').style.display = 'block';
});

document.getElementById('open-datenschutz').addEventListener('click', () => {
  document.getElementById('datenschutz-modal').style.display = 'block';
});

// Modal schließen
document.getElementById('close-impressum').addEventListener('click', ()
