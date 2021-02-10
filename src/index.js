const nav = document.querySelector('nav');

nav.onclick = () => {
  nav.firstChild.classList.toggle('active');
}