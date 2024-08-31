function convertTemperature() {
    let temp = parseFloat(document.getElementById('inputTemp').value);
    let unit = document.getElementById('inputUnit').value;
    
    if (isNaN(temp)) {
        alert("Please enter a valid number.");
        return;
    }

    let celsius, fahrenheit, kelvin;

    if (unit === "Celsius") {
        celsius = temp;
        fahrenheit = (temp * 9/5) + 32;
        kelvin = temp + 273.15;
    } else if (unit === "Fahrenheit") {
        celsius = (temp - 32) * 5/9;
        fahrenheit = temp;
        kelvin = (temp - 32) * 5/9 + 273.15;
    } else if (unit === "Kelvin") {
        celsius = temp - 273.15;
        fahrenheit = (temp - 273.15) * 9/5 + 32;
        kelvin = temp;
    }

    document.getElementById('resultCelsius').innerText = `Celsius: ${celsius.toFixed(2)} °C`;
    document.getElementById('resultFahrenheit').innerText = `Fahrenheit: ${fahrenheit.toFixed(2)} °F`;
    document.getElementById('resultKelvin').innerText = `Kelvin: ${kelvin.toFixed(2)} K`;
}
