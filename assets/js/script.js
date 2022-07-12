"use strict";

const dropdownLinks = document.querySelectorAll(".link");
const hamburger = document.querySelector("#hamburger");

for (let link of dropdownLinks) {
    link.addEventListener("click", closeHamburger);
}

function closeHamburger() {
    hamburger.checked = false;
}