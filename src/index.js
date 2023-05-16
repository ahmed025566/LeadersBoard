import './index.css';
import SaveToStorage, { getFromStorage } from './modules/fillTheFields.js';
import getScore from './modules/getScore.js';
import postScore from './modules/postScore.js';

const submit = document.querySelector('.submit');
const refresh = document.querySelector('.refresh');
const Name = document.querySelector('.name');
const scor = document.querySelector('.score');

submit.addEventListener('click', (e) => {
  e.preventDefault();
  postScore();
});

refresh.addEventListener('click', () => {
  getScore();
});

Name.addEventListener('input', () => {
  SaveToStorage();
});
scor.addEventListener('input', () => {
  SaveToStorage();
});
window.addEventListener('DOMContentLoaded', () => {
  getScore();
  getFromStorage();
});
