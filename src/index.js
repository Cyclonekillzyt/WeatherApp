import './style.css';
import { updateBgVideo } from './bgVideo';
import {searchItems} from './search.js'
import { fetchWeather } from './fetchData.js';
import { handleDIsplay } from './handleDisplay.js';
import { start } from './onload.js';

start();
const form = document.getElementById('form');



form.addEventListener('submit', async (e) => {
  e.preventDefault();
  const term = searchItems().searchTerm;
  try {
    const weatherData = await fetchWeather(term);
    handleDIsplay(weatherData);
    updateBgVideo(weatherData.conditions);
  } catch (error) {
    console.log(error);
  }
});





