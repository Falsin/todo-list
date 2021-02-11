const nav = document.querySelector('nav');
const menuBlock = document.querySelector('.menuBlock');

nav.onclick = () => {
  nav.classList.toggle('active');
  menuBlock.classList.toggle('active');
}

const section = document.querySelector('.section');

console.dir(section)