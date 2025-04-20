async function fetchWeather(term) {
  document.getElementById('loading').style.display = 'flex';
  try {
    const response = await fetch(
      `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${term}?key=${process.env.API_KEY}`
    );
    const data = await response.json();
    const address = data.resolvedAddress;
    const timezone = data.timezone;
    const date = data.currentConditions.datetime;
    const icon = data.currentConditions.icon;
    const conditions = data.currentConditions.conditions.toLowerCase();
    const temp = data.currentConditions.temp;
    const day = data.days[0].datetime;
    const weatherData = {
      address,
      timezone,
      date,
      icon,
      conditions,
      temp,
      day,
    };
    console.log(weatherData);
    return weatherData;
  } catch (error) {
    console.log(error);
    alert('city not found, please enter a valid city or check you spelling.');
  }
  finally{
     document.getElementById('loading').style.display = 'none';
  }
}

export { fetchWeather };
