let weatherData = null;
async function fetchWeather(term) {
  try {
    const response = await fetch(
      `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${term}?key=${process.env.API_KEY}`
    );
    const data = await response.json();
    weatherData = data;
    return weatherData;
  } catch (error) {
    console.log(error);
  }
}

export { fetchWeather, weatherData };
