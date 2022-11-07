// Got all necessary DOM elements from html to javascript variables

const display = document.querySelector("#display");
const buttons = document.querySelectorAll("button");
const themeToggle = document.querySelector(".theme-toggle");
const toggleIcon = document.querySelector(".toggle");
const calculator = document.querySelector(".calculator");

// Toggle State

let isToggled = true;

// Iterating over each button in the calculator

buttons.forEach((item) => {

    // If button is clicked it starts arrow function

    item.onclick = () => {

        // If statements to define the output of display

        if (item.id == "clear") {

            display.innerText = "";

        } else if (item.id == "backspace") {

            let input = display.innerText.toString();
            display.innerText = input.substr(0, input.length - 1);

        } else if (display.innerText != "" && item.id == "equal") {

            display.innerText = eval (display.innerText);

        } else if (display.innerText == "" && item.id == "equal") {

            display.innerText = "-";
            setTimeout(() => (display.innerText = ""), 1000);

        } else {

            // Displays proper number, operator etc.

            display.innerText += item.id;

        }

    };

});

// Function for theme toggling

themeToggle.onclick = () => {

    calculator.classList.toggle("dark");
    themeToggle.classList.toggle("active");
    isToggled = false;

}