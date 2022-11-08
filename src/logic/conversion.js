// Get variables from DOM

let celsius = document.getElementById("celsius");
let fahrenheit = document.getElementById("fahrenheit");

let minute = document.getElementById("minute");
let hour = document.getElementById("hour");

let kilogram = document.getElementById("kilogram");
let pound = document.getElementById("pound");



// Temperature Convertion

convertToFahrenheit = () => {
    let output = ( parseFloat(celsius.value) * 1.8) + 32;
    fahrenheit.value = parseFloat(output.toFixed(1));
}

convertToCelsius = () => {
    let output = ( parseFloat(fahrenheit.value) - 32) * 0.5556;
    celsius.value = parseFloat(output.toFixed(1));
}

// Time Convertion

convertToHours = () => {
    let output = ( parseFloat(minute.value) / 60);
    hour.value = parseFloat(output.toFixed(1));
}

convertToMinutes = () => {
    let output = ( parseFloat(hour.value) * 60);
    minute.value = parseFloat(output.toFixed(1));
}


// Weight Convertion

convertToPound = () => {
    let output = ( parseFloat(kilogram.value) * 2.2046226218);
    pound.value = parseFloat(output.toFixed(2));
}

convertToKilogram = () => {
    let output = ( parseFloat(pound.value) / 2.2046226218);
    kilogram.value = parseFloat(output.toFixed(2));
}




