import { updateBgVideo } from './bgVideo';
import { fetchWeather } from './fetchData.js';
import { handleDIsplay } from './handleDisplay.js';

export const start = async () => {
  try {
    const weatherData = await fetchWeather('accra');
    handleDIsplay(weatherData);
    updateBgVideo(weatherData.conditions);
  } catch (error) {
    alert('Please connect to the internet');
    console.log(error);
  }
};
