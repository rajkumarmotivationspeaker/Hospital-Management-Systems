// Highlight current navigation item
const navLinks = document.querySelectorAll('nav ul li a');
navLinks.forEach(link => {
  link.addEventListener('click', function () {
    navLinks.forEach(l => l.classList.remove('active'));
    this.classList.add('active');
  });
});

// Display welcome alert (example)
// window.addEventListener('DOMContentLoaded', () => {
//   alert('Welcome to the Hospital Management System!');
// });



// Welcome messager 
function stp() {
  +
  alert('Welcome to the Hospital Management System!');
}
setTimeout(stp, 4000);


// let wlcm = document.querySelector(".wlc_img")

// function stp(){
// wlcm.style.display= "block";
// }

// setTimeout(stp,2000);




// menu icon functionality starts here


let menuIcon_value = document.querySelector('.menu-icon1').className;   // acces the class name
let menuIcon1 = document.querySelector('.menu-icon1')
let menuIcon2 = document.querySelector('.menu-icon2')
menuIcon2.style.display = "none";
let sub_menu = document.querySelector('.sub_menu');

function stp() {
  sub_menu.style.display = "block";

  if (menuIcon_value == "fa-solid fa-bars menu-icon menu-icon1") {
    // alert("hello if entered");
    menuIcon1.style.display = "none";
    menuIcon2.style.display = "block";
   
  }
}

function stpclose() {
  sub_menu.style.display = "none";

  if (menuIcon_value == "fa-solid fa-bars menu-icon menu-icon1") {
    menuIcon1.style.display = "block";
    menuIcon2.style.display = "none";
  }
}

// menu icon functionality ends here

