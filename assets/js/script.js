const menuToggle = document.querySelector('.menu-toggle input');
const nav = document.querySelector('nav ul');

menuToggle.addEventListener('click', function() {
    nav.classList.toggle('slide');
});

//sticky navbar 
window.onscroll = function() {myFunction()};
var navbar = document.getElementById('navbar');
var sticky = navbar.offsetTop;

function myFunction() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add('sticky')
  } else {
    navbar.classList.remove('sticky');
  }
};
