// Highlight current navigation item
const navLinks = document.querySelectorAll('nav ul li a');
navLinks.forEach(link => {
  link.addEventListener('click', function() {
    navLinks.forEach(l => l.classList.remove('active'));
    this.classList.add('active');
  });
});

// Display welcome alert (example)
// window.addEventListener('DOMContentLoaded', () => {
//   alert('Welcome to the Hospital Management System!');
// });



// Welcome messager 
function stp(){+
alert('Welcome to the Hospital Management System!');
}  
setTimeout(stp,4000);


// let wlcm = document.querySelector(".wlc_img")

// function stp(){
// wlcm.style.display= "block";
// }

// setTimeout(stp,2000);
