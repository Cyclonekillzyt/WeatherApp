function handleDIsplay(weatherData) {
  console.log(weatherData);
  const address = weatherData.address;
  const timezone = weatherData.timezone;
  const icon = weatherData.icon;
  const temp = weatherData.temp;
  const day = weatherData.day;
  const today = new Date().toLocaleDateString('en-US',{weekday: "long"})

  const dateDisplay = document.getElementById('date');
  const addressDisplay = document.getElementById('search');
  const tempDisplay = document.getElementById('temp');
  const timezoneDisplay = document.getElementById('timezone');
  const dayDisplay = document.getElementById('day')
  updateDisplay(icon);
  dateDisplay.textContent = day;
  tempDisplay.textContent = temp;
  addressDisplay.placeholder = address;
  timezoneDisplay.textContent = timezone;
  dayDisplay.textContent = today;
}

function updateDisplay(string) {
  let conditions = string.toLowerCase();
  const path = `./assets/final/${conditions}.svg`;
  const img = document.getElementById('weatherIcon');
  img.src = path;
}


export { handleDIsplay };