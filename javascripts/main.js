"use strict";


// loops for accordion effect inside sections information //

var acc = document.getElementsByClassName("accordion");



// this  is for the accordion feature on the divs containing projects and about me section . 
for (var i = 0; i < acc.length; i++) {
    acc[i].onclick = function(){
        this.classList.toggle("active");
        this.nextElementSibling.classList.toggle("show");
  }
}


// Navbar function.   //

function openNav() {
    document.getElementById("sidenavID").style.width = "100%";
}

function closeNav() {
    document.getElementById("sidenavID").style.width = "0%";
}


// Transition photo effect // 