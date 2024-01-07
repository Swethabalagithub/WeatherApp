

  function getWeather() {
    const apiKey = 'YOUR_OPENWEATHERMAP_API_KEY'; // Replace with your OpenWeatherMap API key
    const cityInput = document.getElementById('cityInput');
    const city = cityInput.value;

    if (!city) {
      alert('Please enter a city');
      return;
    }

    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`;

    fetch(apiUrl)
      .then(response => response.json())
      .then(data => {
        const resultElement = document.getElementById('result');
        const temperature = data.main.temp;
        const description = data.weather[0].description;

        resultElement.innerHTML = `Temperature: ${temperature} K<br>Description: ${description}`;
      })
      .catch(error => {
        console.error('Error fetching weather data:', error);
        alert('Error fetching weather data. Please try again.');
      });
  }

