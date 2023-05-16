import './index.css';
import getScore from './modules/getScore.js';
import postScore from './modules/postScore.js';

const submit = document.querySelector('.submit');
const refresh = document.querySelector('.refresh');
submit.addEventListener('click', (e) => {
  e.preventDefault();
  postScore();
});

refresh.addEventListener('click', () => {
  getScore();
});
window.addEventListener('DOMContentLoaded', () => {
  getScore();
});
