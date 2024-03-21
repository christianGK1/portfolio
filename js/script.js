const body = document.querySelector('body');
const nav = document.querySelector('nav');
const menu = document.querySelector('.header-mobile-nav');

menu.addEventListener('click', () => {
  nav.classList.toggle('active');
});

body.addEventListener('click', () => {
  nav.classList.remove('active');
});

window.addEventListener('scroll', () => {
  let header = document.querySelector('header');
  header.classList.toggle('sticky', window.scrollY > 0);
});
