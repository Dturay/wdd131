// Function to calculate wind chill factor
function calculateWindChill(temperature, windSpeed) {
  if (
    (temperature <= 10 && windSpeed > 4.8) ||
    (temperature <= 50 && windSpeed > 3)
  ) {
    return (
      Math.round(
        35.74 +
          0.6215 * temperature -
          35.75 * Math.pow(windSpeed, 0.16) +
          0.4275 * temperature * Math.pow(windSpeed, 0.16)
      ) + "°"
    );
  } else {
    return "N/A";
  }
}

// Function to set date and wind chill
function setDate() {
  const currentYear = new Date().getFullYear();
  const lastModified = document.lastModified;

  document.getElementById("current-year").textContent = currentYear;
  document.getElementById("last-modified").textContent = lastModified;

  // Static temperature and wind speed values
  const temperature = 28; // Celsius
  const windSpeed = 10; // km/h

  // Calculate wind chill
  const windChill = calculateWindChill(temperature, windSpeed);
  document.getElementById("wind-chill").textContent = windChill;
}

// Call functions when the page loads
document.addEventListener("DOMContentLoaded", setDate);
