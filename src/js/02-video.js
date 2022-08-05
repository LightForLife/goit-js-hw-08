import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.querySelector('iframe');
const player = new Player(iframe);

// ключ к текущему времени воспроизведения
const CURRENT_TIME_KEY = 'videoplayer-current-time';

// сохраняем время воспроизведения в локальное хранилище
const onTimeUpdate = function ({ seconds }) {
  localStorage.setItem(CURRENT_TIME_KEY, seconds);
};

// вызываем метод on() с событием onTimeUpdate и ставим throttle 1 секунду
player.on('timeupdate', throttle(onTimeUpdate, 1000));

// передаем текущее время с хранилища

let savedTime = localStorage.getItem(CURRENT_TIME_KEY);

if (savedTime) {
  // console.log(savedTime);
} else savedTime = 0;

player.setCurrentTime(savedTime);
