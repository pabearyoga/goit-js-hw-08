import Player from '@vimeo/player';

const iframe = document.querySelector('iframe');
const player = new Player(iframe);

player.on('play', function () {
  console.log('played the video!');
});

player.getVideoTitle().then(function (title) {
  console.log('title:', title);
});

let b = 0;
player.on('timeupdate', function () {
  player.getCurrentTime().then(function (seconds) {
    const a = seconds;
    localStorage.setItem('videoplayer-current-time', JSON.stringify(a));
    const b = localStorage.getItem('videoplayer-current-time');
  });
});

console.log(b);
// player.setCurrentTime(b);
