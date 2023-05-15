export let array = [];
export const saveToStorage = (arr) => {
  localStorage.setItem('scores', JSON.stringify(arr));
};

export const getFromStorage = () => {
  const data = localStorage.getItem('scores');
  if (data) {
    array = JSON.parse(data);
  }
};
