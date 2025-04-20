import snowyDay from './assets/day-snowy.mp4';
import rainyDay from './assets/day-rainy.mp4';
import cloudyDay from './assets/day-cloudy.mp4';
import clearDay from './assets/day-clear.mp4';
import clearNight from './assets/clearNight.mp4';
import cloudyNight from './assets/night-cloudy.mp4';
import rainyNight from './assets/night-rain.mp4';
import snowyNight from './assets/night-snowy.mp4';

function updateBgVideo(condition) {
  const hour = new Date().getHours();
  const isNight = hour >= 18 || hour <= 6;
  const video = document.getElementById('bgVideo');
  video.playbackRate = 0.75;
  const bgVideo = document.getElementById('video');
  if (condition.includes('snow')) {
    bgVideo.src = isNight ? snowyNight : snowyDay;
  } else if (
    condition.includes('rain') ||
    condition.includes('drizzle') ||
    condition.includes('shower') ||
    condition.includes('thunderstorm')
  ) {
    bgVideo.src = isNight ? rainyNight : rainyDay;
  } else if (condition.includes('clear') || condition.includes('sunny')) {
    bgVideo.src = isNight ? clearNight : clearDay;
  } else if (condition.includes('cloud') || condition.includes('overcast')) {
    bgVideo.src = isNight ? cloudyNight : cloudyDay;
  }

  video.load();
  video.play();
  console.log(bgVideo.src);
}

export { updateBgVideo };
