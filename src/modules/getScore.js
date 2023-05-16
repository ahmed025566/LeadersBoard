const scoresDiv = document.querySelector('.scoresDiv');

const getScore = async () => {
  await fetch('https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/d9OZ9XS9VCZIRwQxnm1r/scores/', {
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then((data) => {
      scoresDiv.innerHTML = '';
      const scores = data.result;
      let i = 1;
      scores.forEach((player) => {
        const div = document.createElement('div');
        div.className = 'player';
        if (i % 2 === 0) {
          div.classList.add('white');
        }
        div.append(document.createTextNode(`${player.user} : ${player.score}`));
        scoresDiv.append(div);
        i += 1;
      });
    });
};

export default getScore;