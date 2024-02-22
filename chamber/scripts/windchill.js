// Function to calculate windchill
function calculateWindChill(temperature, windSpeed) {
    // Check if temperature is below 50°F and wind speed is above 3 mph
    if (temperature < 50 && windSpeed > 3) {
        // Calculate wind chill
        var windChill = 35.74 + (0.6215 * temperature) - (35.75 * Math.pow(windSpeed, 0.16)) + (0.4275 * temperature * Math.pow(windSpeed, 0.16));
        // Round wind chill to two decimal places
        windChill = Math.round(windChill * 100) / 100;
        return windChill + " °F";
    } else {
        return "N/A";
    }
}

// Example temperature and wind speed values
var temperature = 40; // Example temperature in Fahrenheit
var windSpeed = 10; // Example wind speed in mph

// Call the function with your temperature and wind speed values
var windChillValue = calculateWindChill(temperature, windSpeed);

// Display wind chill value on the webpage
document.getElementById("chillvalue").textContent = windChillValue;
