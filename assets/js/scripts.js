// scripts.js — project entry point

function initializeApp() {
  const toggler = document.querySelector('.navbar-toggler');
  const menu = document.querySelector('.navbar-collapse');

  if (toggler && menu) {
    toggler.addEventListener('click', () => {
      const isOpen = menu.classList.toggle('show');
      toggler.setAttribute('aria-expanded', isOpen);
    });
  }
}

document.addEventListener('DOMContentLoaded', initializeApp);
