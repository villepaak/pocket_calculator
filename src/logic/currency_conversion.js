// Rates

let firstRate = document.querySelector(".first-rate");
let secondRate = document.querySelector(".second-rate");

// Convert button

let resultBtn = document.querySelector(".result");

// Selection for currency type

let selection = document.querySelectorAll(".options select");
let firstSelection = selection[0];
let secondSelection = selection[1];

// Value Input

let input = document.querySelectorAll(".input input");
let firstInput = input[0];
let secondInput = input[1];

let rates = {};

// API for the currency converter

let requestURL = "https://api.exchangerate.host/latest?base=USD";

// Using template literals to manipulate DOM and iterating through rates
// Displaying the options with all currencies from API

fillOptions = () => {

  let value = "";
  Object.keys(rates).forEach (code => {

    let str = `<option value="${code}">${code}</option>`;
    value += str;

  })

  selection.forEach((s) => (s.innerHTML = value));

}

// Using asynchronous js to fetch from currency API

async function fetchRates() {

  let res = await fetch(requestURL);
  res = await res.json();
  rates = res.rates;

  fillOptions();

}

// Logic for currency conversion

convert = (val, fromCurrency, toCurrency) => { 

  let v = (val / rates[fromCurrency]) * rates[toCurrency];
  let v1 = v.toFixed(2);

  return v1 == 0.0 ? v.toFixed(5) : v1;

}

// Displaying the values

display = () => {

  let v1 = firstSelection.value;
  let v2 = secondSelection.value;

  let val = convert (1, v1, v2);

  firstRate.innerHTML = `1 ${v1} equals`;
  secondRate.innerHTML = `${val} ${v2}`;

}

// Event listener for currency button to listen for clicks

resultBtn.addEventListener("click", () => {

  let fromCurrency = firstSelection.value;
  let fromValue = parseFloat(firstInput.value);
  let toCurrency = secondSelection.value; 

  if (isNaN (fromValue)) { // In case if user doesn't type anything

    alert("Enter value");

  } else { // Else convert normally

    let currencyValue = convert(fromValue, fromCurrency, toCurrency);
    secondInput.value = currencyValue;

  }

})

selection.forEach(s => s.addEventListener("change", display));

// Logic for swapping

document.querySelector(".swap").addEventListener("click", () => {

    let input_A = firstInput.value;
    let input_B = secondInput.value;
    let sel_A = firstSelection.value;
    let sel_B = secondSelection.value;

    firstInput.value = input_B;
    secondInput.value = input_A;

    firstSelection.value = sel_B;
    secondSelection.value = sel_A;

    display();

})

fetchRates();