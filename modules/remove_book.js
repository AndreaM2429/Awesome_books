/* eslint-disable import/prefer-default-export */
export const removeBook = (booklist, index, save, load) => {
  booklist.splice(index, 1);
  save();
  load();
};