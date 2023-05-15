import './index.css';
import addScore from './modules/addScore.js';
import displayData from './modules/display.js';
import { array, getFromStorage, saveToStorage } from './modules/storage.js';

const submit = document.querySelector('.submit');

submit.addEventListener('click', (e) => {
  e.preventDefault();
  addScore();
  saveToStorage(array);
  displayData();
});

window.addEventListener('DOMContentLoaded', () => {
  getFromStorage();
  displayData();
});
