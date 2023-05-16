const Name = document.querySelector('.name');
const scor = document.querySelector('.score');

const postScore = async () => {
  await fetch('https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/d9OZ9XS9VCZIRwQxnm1r/scores/', {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      user: Name.value,
      score: scor.value,
    }),
  })
    .then((response) => {
      response.json();
      Name.value = '';
      scor.value = ''
    })

};

export default postScore;