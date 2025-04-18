import rainVideo from './assets/day-snowy.mp4';

function updateBgVideo() {
  const video = document.getElementById('bgVideo');
  video.playbackRate = 0.75;
  const bgVideo = document.getElementById('video');
  bgVideo.src = rainVideo;

  video.load();
  video.play();
  console.log(bgVideo.src);
}

export { updateBgVideo };
