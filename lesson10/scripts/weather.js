// select HTML elements in the document
const currentTemp = document.querySelector('#current-temp');
const weatherIcon = document.querySelector('#weather-icon');
const captionDesc = document.querySelector('figcaption');

const apikey = 'f93916b337d971e554180678001160ef';
const lat = '64.8401';
const lon = '-147.72';

const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apikey}&units=imperial`;


async function apiFetch()
{
    try
    {
        const response = await fetch(url);
        if(response.ok)
        {
            const data = await response.json();

            displayResult(data);
        }
        else 
        {
            throw Error(await response.text());
        }
    }

    catch (error)
    {
        console.log(error);
    }
}

function displayResult(data)
{
    console.log(data);
    currentTemp.innerHTML = `${data.main.temp} &deg;F`;
    
    const iconsrc = `https://openweathermap.org/img/w/${data.weather[0].icon}.png`;
    let desc = data.weather[0].description;
    weatherIcon.setAttribute("src", iconsrc);
    weatherIcon.setAttribute("alt", desc);
    captionDesc.textContent = `${desc}`;
}


apiFetch();