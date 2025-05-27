// Replace with your OpenWeatherMap API key
const apiKey = 'YOUR_API_KEY';
const city = 'San Miguel, SV';  // Chamber location
const weatherUrl = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&units=imperial&appid=${apiKey}`;

// Function to fetch and display weather data
async function getWeather() {
    try {
        const response = await fetch(weatherUrl);
        const data = await response.json();

        // Current weather
        const currentTemp = data.list[0].main.temp;
        const weatherDescription = data.list[0].weather[0].description;

        // 3-day forecast
        const forecast = data.list.slice(1, 4).map(item => {
            return {
                date: item.dt_txt,
                temp: item.main.temp,
                description: item.weather[0].description
            };
        });

        // Update the weather section with the fetched data
        document.getElementById('current-weather').innerHTML = `
            <p>Current Temperature: ${currentTemp}°F</p>
            <p>Description: ${weatherDescription}</p>
        `;

        const forecastSection = document.getElementById('forecast');
        forecast.forEach((item, index) => {
            forecastSection.innerHTML += `
                <div class="forecast-day">
                    <h4>Day ${index + 1}: ${item.date}</h4>
                    <p>Temperature: ${item.temp}°F</p>
                    <p>Description: ${item.description}</p>
                </div>
            `;
        });
    } catch (error) {
        console.error("Error fetching weather data: ", error);
        document.getElementById('weather-info').innerHTML = 'Unable to fetch weather data.';
    }
}

window.onload = getWeather;
