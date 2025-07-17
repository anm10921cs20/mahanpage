  const navBtn = document.querySelector('.btn-bars');
  const navMenu = document.querySelector('.nav-mobile');
  const navOverlay = document.querySelector('.nav-overlay');

  navBtn.addEventListener('click', () => {
    navMenu.classList.toggle('nav-menu-active');
    navOverlay.style.display = "block";
  })

  navOverlay.addEventListener('click',() => {
    navMenu.classList.remove('nav-menu-active');
    navOverlay.style.display = "none";
  })

window.addEventListener('load', () => {
  const loader = document.querySelector(".loader");

  loader.classList.add("loader-hidden")

  loader.addEventListener('transitionend', () => {
    document.body.removeChild('loader');
  })
})