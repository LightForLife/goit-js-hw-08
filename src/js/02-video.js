import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.querySelector('iframe');
const player = new Player(iframe);

// Ключ к текущему времени воспроизведения
const CURRENT_TIME_KEY = 'videoplayer-current-time';

// Сохраняем время воспроизведения в локальное хранилище
const onTimeUpdate = function ({ seconds }) {
  localStorage.setItem(CURRENT_TIME_KEY, seconds);
};

// Вызываем метод on() с событием onTimeUpdate и ставим throttle 1 секунду
player.on('timeupdate', throttle(onTimeUpdate, 1000));

// Передаем текущее время с хранилища

let savedTime = localStorage.getItem(CURRENT_TIME_KEY);

if (savedTime) {
  player.setCurrentTime(savedTime);
}
