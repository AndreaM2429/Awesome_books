import { DateTime } from '../node_modules/luxon/src/luxon.js';

const setdate = () => {
  const curDate = document.getElementById('now');
  curDate.textContent = DateTime.now().toFormat('MMMM dd, yyyy HH:mm');
};
export default setdate;