const Name = document.querySelector('.name');
const scor = document.querySelector('.score');

const SaveToStorage = () => {
  const array = [];
  const fieldsData = {
    name: Name.value,
    score: scor.value,
  };
  array.push(fieldsData);
  localStorage.setItem('Input Fields', JSON.stringify(array));
};

export const getFromStorage = () => {
  const arr = JSON.parse(localStorage.getItem('Input Fields'));
  Name.value = arr[0].name;
  scor.value = arr[0].score;
};
export default SaveToStorage;
