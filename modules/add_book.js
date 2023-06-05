const addBook = (booklist, save, load) => {
  const bookTitle = document.querySelector('#book-title');
  const bookAuthor = document.querySelector('#book-author');

  const book = {
    bookTitle: bookTitle.value,
    bookAuthor: bookAuthor.value,
  };

  booklist.push(book);
  save();
  load();

  bookTitle.value = '';
  bookAuthor.value = '';
};
export default addBook;