"use strict";

/*
   New Perspectives on HTML5, CSS3, and JavaScript 6th Edition
   Tutorial 13
   Case Problem 1

   Author: Angelina Stilphen
   Date:   4.18.19
   
   Filename: mpl_links.js

*/

window.addEventListener("load", function() {
    // created variable to get the link "govLink" by id 
    var allSelect = document.forms.govLinks;
    // created for loop, inside for loop there's an anomonyous function to use the href property of the location object to change
    // the page shwon in the browser window to the value of the target f the event object that initiated onchange 
    for (var i = 0; i < allSelect.length; i++) {
        allSelect[i].onchange = function(e) {
            window.location.href = e.target.value;
        }
    }
});
