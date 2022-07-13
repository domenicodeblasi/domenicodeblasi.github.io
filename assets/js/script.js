"use strict";

const dropdownLinks = document.querySelectorAll(".link");
const hamburger = document.querySelector("#hamburger");
const projectCards = document.querySelectorAll(".project");

// close hamburger menu when we click on a link

for (let link of dropdownLinks) {
    link.addEventListener("click", closeHamburger);
}

function closeHamburger() {
    hamburger.checked = false;
}

/* the hover pseudo class doesn't work as it should on touch screens,
so we have to "click" to bring up the yellow panel. */

for (let card of projectCards) {
    card.addEventListener("click", showPanel);
}

function showPanel(e) {
    
    let displayFromCss = window.getComputedStyle(e.target.querySelector(".retractable-panel")).display;
    console.log(displayFromCss);

    if (displayFromCss === "none") {
        e.target.querySelector(".retractable-panel").style.display = "flex";
        e.target.querySelector(".retractable-panel").style.height = "65%";
        e.target.querySelector(".retractable-panel").style.animation = "show-project-panel 0.1s ease";
    } else {
        e.target.querySelector(".retractable-panel").style.display = "";
        e.target.querySelector(".retractable-panel").style.height = "";
    }
}