// conversions garni functions haru
function celsiusToFahrenheit(celsius) {
    return (celsius * 9/5) + 32;
}

function celsiusToKelvin(celsius) {
    return celsius + 273.15;
}

function fahrenheitToCelsius(fahrenheit) {
    return (fahrenheit - 32) * 5/9;
}

function fahrenheitToKelvin(fahrenheit) {
    return (fahrenheit - 32) * 5/9 + 273.15;
}

function kelvinToCelsius(kelvin) {
    return kelvin - 273.15;
}

function kelvinToFahrenheit(kelvin) {
    return (kelvin - 273.15) * 9/5 + 32;
}

// Validation: Check if input is a valid number
function isValidNumber(value) {
    return !isNaN(value) && value.trim() !== '';
}

// Convert temperatures based on the selected unit
function convertTemperature() {
    const tempInput = document.getElementById('tempInput').value; // tempInput id bhako input field bata value linchha which is the value that a user wants to convert.
    const selectedUnit = document.querySelector('input[name="unit"]:checked').value; // jun radio button select garinchha with the name="unit" teslai khojera value retrieve garchha.
    const result = document.getElementById('result');
    const error = document.getElementById('error'); // result ra error id bhako element liyera conversion result display garchha. 

    // Clear previous messages
    result.innerHTML = '';
    error.innerHTML = '';

    if (!isValidNumber(tempInput)) {
        error.innerHTML = 'Please enter a valid number!';
        return;
    }

    const temperature = parseFloat(tempInput);
    let output = '';

    if (selectedUnit === 'C') {
        // Celsius selected
        const fahrenheit = celsiusToFahrenheit(temperature);
        const kelvin = celsiusToKelvin(temperature);
        output = `${temperature}°C = ${fahrenheit.toFixed(2)}°F = ${kelvin.toFixed(2)}K`;
    } 
    else if (selectedUnit === 'F') {
        // Fahrenheit selected
        const celsius = fahrenheitToCelsius(temperature);
        const kelvin = fahrenheitToKelvin(temperature);
        output = `${temperature}°F = ${celsius.toFixed(2)}°C = ${kelvin.toFixed(2)}K`;
    } 
    else if (selectedUnit === 'K') {
        // Kelvin selected
        const celsius = kelvinToCelsius(temperature);
        const fahrenheit = kelvinToFahrenheit(temperature);
        output = `${temperature}K = ${celsius.toFixed(2)}°C = ${fahrenheit.toFixed(2)}°F`;
    }

    result.innerHTML = output;
}

// Add event listener for the "Convert" button
document.getElementById('convertButton').addEventListener('click', convertTemperature); //convert button bhanni ma click garda temperature convert gardinchha
