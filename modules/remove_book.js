const removeBook = (booklist, index, save, load) => {
  booklist.splice(index, 1);
  save();
  load();
};
export default removeBook;