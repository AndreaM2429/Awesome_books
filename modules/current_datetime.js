import DateTime from '../node_modules/luxon/src/datetime.js';

/* eslint-disable import/prefer-default-export */
export const setdate = () => {
  const curDate = document.getElementById('now');
  curDate.textContent = DateTime.now().toFormat('MMMM dd, yyyy HH:mm');
};
