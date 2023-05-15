import { array } from './storage.js';

const name = document.querySelector('.name');
const score = document.querySelector('.score');
let i = 1;
const addScore = () => {
  if (name.value !== '' && score.value !== '') {
    const Newscore = {
      Name: name.value,
      scor: score.value,
      i,
    };

    array.push(Newscore);
    name.value = '';
    score.value = '';
    i += 1;
  }
};

export default addScore;