const display = document.querySelector("#display");
const buttons = document.querySelectorAll("button");
const themeToggle = document.querySelector(".theme-toggle");
const toggleIcon = document.querySelector(".toggle");
const calculator = document.querySelector(".calculator");

let isToggled = true;

buttons.forEach((item) => {

    item.onclick = () => {

        if (item.id == "clear") {

            display.innerText = "";

        } else if (item.id == "backspace") {

            let input = display.innerText.toString();
            display.innerText = input.substr(0, input.length - 1);

        } else if (display.innerText != "" && item.id == "equal") {

            display.innerText = eval (display.innerText);

        } else if (display.innerText == "" && item.id == "equal") {

            display.innerText = "null";
            setTimeout(() => (display.innerText = ""), 3000);

        } else {

            display.innerText += item.id;

        }

    };

});

themeToggle.onclick = () => {

    calculator.classList.toggle("dark");
    themeToggle.classList.toggle("active");
    isToggled = false;

}