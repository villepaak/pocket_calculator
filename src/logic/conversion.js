// Get variables from DOM

let celsius = document.getElementById("celsius");
let fahrenheit = document.getElementById("fahrenheit");

let minute = document.getElementById("minute");
let hour = document.getElementById("hour");

let kilogram = document.getElementById("kilogram");
let pound = document.getElementById("pound");

let kilobyte = document.getElementById("kilobyte");
let megabyte = document.getElementById("megabyte");

let centimeter = document.getElementById("centimeter");
let inches = document.getElementById("inches");

let kmInHour = document.getElementById("kmInHour");
let meterInSecond = document.getElementById("meterInSecond");


// Temperature Convertion

convertToFahrenheit = () => {

    let output = ( parseFloat(celsius.value) * 1.8) + 32;
    // Takes the output, parses and calculates

    fahrenheit.value = parseFloat(output.toFixed(1));
    // Parses and assigns output value into hour variable

}

convertToCelsius = () => {

    let output = ( parseFloat(fahrenheit.value) - 32) * 0.5556;
    // Takes the output, parses and calculates

    celsius.value = parseFloat(output.toFixed(1));
    // Parses and assigns output value into hour variable

}

// Time Convertion

convertToHours = () => {

    let output = ( parseFloat(minute.value) / 60);
    // Takes the output, parses and calculates

    hour.value = parseFloat(output.toFixed(1));
    // Parses and assigns output value into hour variable

}

convertToMinutes = () => {

    let output = ( parseFloat(hour.value) * 60);
    // Takes the output, parses and calculates

    minute.value = parseFloat(output.toFixed(1));
    // Parses and assigns output value into hour variable

}


// Weight Convertion

convertToPound = () => {

    let output = ( parseFloat(kilogram.value) * 2.2046226218);
    // Takes the output, parses and calculates

    pound.value = parseFloat(output.toFixed(2));
    // Parses and assigns output value into hour variable

}

convertToKilogram = () => {

    let output = ( parseFloat(pound.value) / 2.2046226218);
    // Takes the output, parses and calculates

    kilogram.value = parseFloat(output.toFixed(2));
    // Parses and assigns output value into hour variable
    
}

// Data Conversion

convertToMegabyte = () => {

    let output = ( parseFloat(kilobyte.value) * 1000);
    // Takes the output, parses and calculates

    megabyte.value = parseFloat(output.toFixed(3));
    // Parses and assigns output value into hour variable

}

convertToKilobyte = () => {

    let output = ( parseFloat(megabyte.value) / 1000);
    // Takes the output, parses and calculates

    kilobyte.value = parseFloat(output.toFixed(3));
    // Parses and assigns output value into hour variable

}

// Length Conversion

convertToInches = () => {

    let output = ( parseFloat(centimeter.value) / 2.54);
    // Takes the output, parses and calculates

    inches.value = parseFloat(output.toFixed(2));
    // Parses and assigns output value into hour variable

}

convertToCentimeter = () => {

    let output = ( parseFloat(inches.value) * 2.54);
    // Takes the output, parses and calculates

    centimeter.value = parseFloat(output.toFixed(2));
    // Parses and assigns output value into hour variable

}


// Speed Conversion

convertToMeterInSecond = () => {

    let output = ( parseFloat(kmInHour.value) * 1000 / 3600);
    // Takes the output, parses and calculates

    meterInSecond.value = parseFloat(output.toFixed(3));
    // Parses and assigns output value into hour variable

}

convertToKmInHour = () => {

    let output = ( parseFloat(meterInSecond.value) / 1000 * 3600);
    // Takes the output, parses and calculates

    kmInHour.value = parseFloat(output.toFixed(3));
    // Parses and assigns output value into hour variable
    
}




