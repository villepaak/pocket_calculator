// Got all necessary DOM elements from html to javascript variables

const display = document.querySelector("#display");
const buttons = document.querySelectorAll("button");
const themeToggle = document.querySelector(".theme-toggle");
const toggleIcon = document.querySelector(".toggle");
const calculator = document.querySelector(".calculator");

// Toggle State

let isToggled = true;

// Function for theme toggling

themeToggle.onclick = () => {

    calculator.classList.toggle("dark");
    themeToggle.classList.toggle("active");
    isToggled = false;

}