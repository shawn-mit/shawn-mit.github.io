"use strict";

var acc = document.getElementsByClassName("accordion");


for (var i = 0; i < acc.length; i++) {
    acc[i].onclick = function(){
        this.classList.toggle("active");
        this.nextElementSibling.classList.toggle("show");
  }
}


// Function  //

function openNav() {
    document.getElementById("sidenavID").style.width = "100%";
}

function closeNav() {
    document.getElementById("sidenavID").style.width = "0%";
}



/*
$('.accordion').on('click', '.accordioncontrol', function(e) {

    e.preventDefault();
    $(this)
        .next('.accordionpanel')
        .not(':animated')
        .slideToggle();
});

$('.accordionpanel').animate({

    height: 'show',
    paddingTop: 'show',
    paddingBottom: 'show',
    marginTop: 'show',
    marginBottom: 'show'
});
*/

// ACCORDION FOR SECTIONS 