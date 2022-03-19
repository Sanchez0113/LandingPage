//getting the button
let mybutton = document.getElementById("myBtn");

//shows button when window is scrolled down 20 px
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        mybutton.style.display = "block";
    } else {
        mybutton.style.display = "none";
    }
}
//main button to push to top of page
function toTopFunction() {
    document.body.scrollTop = 0; //For Safari
    document.documentElement.scrollTop = 0;//For everyone else
}