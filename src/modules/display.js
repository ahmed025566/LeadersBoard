import { array } from './storage.js';

const scoresDiv = document.querySelector('.scoresDiv');

const displayData = () => {
  scoresDiv.innerHTML = '';
  array.forEach((player) => {
    const div = document.createElement('div');
    div.className = 'player';
    if (player.i % 2 === 0) {
      div.classList.add('white');
    }
    // const p = document.createElement('p');
    // p.className = "text";
    div.append(document.createTextNode(`${player.Name} : ${player.scor}`));
    // div.append(p);
    scoresDiv.append(div);
  });
};

export default displayData;