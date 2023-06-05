import { addBook } from './add_book.js';
import { removeBook } from './remove_book.js';

const addone = addBook;
const removeone = removeBook;
export default class Store {
  static init() {
    const store = new Store();
    return store;
  }

  constructor() {
    document.querySelector('form').addEventListener('submit', (e) => {
      e.preventDefault();
      this.add();
    });

    this.bookList = [];
    this.stroageName = 'library';
    this.loadBook();
    this.diplayBooks();
  }

  add = () => {
    addone(this.bookList, this.saveBook, this.loadBook);
  }

  diplayBooks = () => {
    const bookContainer = document.querySelector('.container--book');
    const bookul = document.createElement('ul');
    bookContainer.innerHTML = '';
    this.bookList.forEach((eachBook, index) => {
      const book = document.createElement('li');
      book.classList = 'row border border-success-subtle rounded-2 align-items-center p-2 mt-2';
      if (index % 2 === 1) {
        book.classList.add('bg-light');
      } else {
        book.classList.add('bg-success-subtle');
      }

      const bookDiv = document.createElement('div');
      bookDiv.classList = 'col col-12 col-md-8 mb-3 mb-md-0 text-center text-md-start';

      const bookParagraph = document.createElement('p');
      bookParagraph.classList = 'book-title mb-0';
      bookParagraph.innerHTML = `<strong>${eachBook.bookTitle}</strong> by <strong>${eachBook.bookAuthor}</strong>`;
      bookDiv.append(bookParagraph);

      const buttonDiv = document.createElement('div');
      buttonDiv.classList = 'col col-12 col-md-4';

      const removeButton = document.createElement('button');
      removeButton.textContent = 'Remove';
      removeButton.classList = 'btn btn-danger w-100';
      buttonDiv.appendChild(removeButton);

      book.appendChild(bookDiv);
      book.appendChild(buttonDiv);

      removeButton.addEventListener('click', () => {
        this.remove(index);
      });
      bookul.appendChild(book);
    });
    bookContainer.appendChild(bookul);
  }

  remove = (index) => {
    removeone(this.bookList, index, this.saveBook, this.loadBook);
  }

  loadBook = () => {
    const localStorageBooks = localStorage.getItem(this.stroageName);
    if (localStorageBooks) {
      this.bookList = JSON.parse(localStorageBooks);
      this.diplayBooks();
    }
  }

  saveBook = () => {
    localStorage.setItem(this.stroageName, JSON.stringify(this.bookList));
  }
}
