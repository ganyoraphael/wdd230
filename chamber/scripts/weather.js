const currentTemp = document.querySelector('#current-temp');
const weatherIcon = document.querySelector('#weather-icon');
const captionDesc = document.querySelector('figcaption');

const apikey = 'ae96f33e451e474493e94ec9562118b9';

const lat = '7.946527';
const lon = '-1.023194';

const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apikey}&units=imperial`;

// function displayResults(weatherData) {
//     currentTemp.innerHTML = `<strong>${weatherData.main.temp.toFixed(0)}</strong>`;
function displayResults(weatherData) {
  currentTemp.textContent = `Ghana: ${weatherData.main.temp.toFixed(0)}°F`;

    const iconsrc = `https://openweathermap.org/img/wn/${weatherData.weather[0].icon}@4x.png`
    const desc = weatherData.weather[0].main;
    weatherIcon.setAttribute('src', iconsrc);
    weatherIcon.setAttribute('alt', desc);
    captionDesc.textContent = desc; 
    document.querySelector("#windValue").textContent = weatherData.wind.speed
    document.querySelector("#chillValue").textContent = weatherData.wind.speed

  }

async function apiFetch() {
    try {
      const response = await fetch(url);
      if (response.ok) {
        const data = await response.json();
        displayResults(data);
      } else {
          throw Error(await response.text());
      }
    } catch (error) {
        console.log(error);
    }
  }
  
  apiFetch();


  const forecastUrl = `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${apikey}&units=imperial`;

  function displayForecast(forecastData) {
    const forecastContainer = document.querySelector('#forecast');
    for (let i = 0; i < 3; i++) { 
      const timestamp = forecastData.list[i * 8].dt_txt;
      const iconSrc = `https://openweathermap.org/img/wn/${forecastData.list[i * 8].weather[0].icon}.png`;
      const temp = forecastData.list[i * 8].main.temp;
      const desc = forecastData.list[i * 8].weather[0].description;
  
      const forecastItem = document.createElement('div');
      forecastItem.className = 'forecast-item';
      forecastItem.innerHTML = `
        <div class="forecast-date">${new Date(timestamp).toLocaleDateString('en-US', { weekday: 'short', month: 'short', day: 'numeric' })}</div>
        <img src="${iconSrc}" alt="${desc}">
        <div class="forecast-temp">${temp.toFixed(0)}&deg;F</div>
        <div class="forecast-desc">${desc}</div>
      `;
  
      forecastContainer.appendChild(forecastItem);
    }
  }
  
  async function apiFetchForecast() {
    try {
      const response = await fetch(forecastUrl);
      if (response.ok) {
        const data = await response.json();
        displayForecast(data);
      } else {
          throw Error(await response.text());
      }
    } catch (error) {
        console.log(error);
    }
  }
  
  apiFetchForecast();
  
  