let hamburger = document.querySelector('.hamburger')
let navMenu = document.querySelector('.navigation')

hamburger.addEventListener("click", () => { 
 navMenu.classList.toggle('nav-active');
 navMenu.classList.toggle('navigation');
 hamburger.classList.toggle('active-bar');
});


