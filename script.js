
// Just an animation for the navbar animation
// getting navbar element
const navbar = document.querySelector(".menu_bar");
// envent for changing the background color of the menubar
window.addEventListener('scroll', () => {
  // if we scroll to bottom more than 2
  if (window.scrollY > window.screen.height / 3) {
    // make white
    navbar.classList.add('nav_bar_white');
  } else {
    // or make transparent
    navbar.classList.remove('nav_bar_white');
  }
});
// end of the event
// Just an animation for the navbar animation

// Start ScrollTop btn
// get btn element
const scrollBtn = document.querySelector("#myBtn");
// function for hide or display the button
window.onscroll = function () {
  // if we scroll to the bottom more than 400px
  if (document.body.scrollTop > 400 || document.documentElement.scrollTop > 400) {
    // display the button 
    scrollBtn.classList.add('myBtn_none');
  } else {
    // else hide the button
    scrollBtn.classList.remove('myBtn_none');
  }
}
// End of the function 
// event for scrolling to the top of the page when clicking the button
scrollBtn.addEventListener('click', () => {
  // scrollTo(x,y), x(horizontally) and y(vertically)
  window.scrollTo(0, 0);
});
// End ScrollTop btn

// Img slide script

// **** recuperation des images****
let img_slider = document.getElementsByClassName('img_slider');

let etape = 0;

// ici se trouve le nombre d'image
let nbr_img = img_slider.length;

//  recupertion des action faitent par les boutons next et past
let past = document.querySelector('.past');
let next = document.querySelector('.next');


// on va créer une fonction enlever image active ,qui va permetre d'enlever la classe active sur toule les image
function enleverActiveImages() {
  for (let i = 0; i < nbr_img; i++) {
    img_slider[i].classList.remove('active');
  }
}
next.addEventListener('click', function () {
  etape++;
  if (etape >= nbr_img) {
    etape = 0;
  }
  enleverActiveImages();
  img_slider[etape].classList.add('active');
});
past.addEventListener('click', function () {
  etape--;
  if (etape < 0) {
    etape = nbr_img - 1;
  }
  enleverActiveImages();
  img_slider[etape].classList.add('active');
});

// on va utiliser la function setInterval pour faire defiler les image automatquement 
setInterval(function () {
  etape++;
  if (etape >= nbr_img) {
    etape = 0;
  }
  enleverActiveImages();
  img_slider[etape].classList.add('active');
}, 3000);


// End Img slide script

// End animation for the navbar animation