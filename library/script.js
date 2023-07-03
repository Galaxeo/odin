let myLibrary = [];
let docLib = document.querySelector('.library');

function Book(title, author, numPages, readStatus) {
  this.title = title;
  this.author = author;
  this.numPages = numPages;
  this.readStatus = readStatus;
}

function addBookToLibrary(book) {
  myLibrary.push(book);
  var addBook = document.createElement('div');
  addBook.classList.add('book');
  // Add Book
  var bookTitle = document.createElement('h1');
  bookTitle.classList.add("bookTitle");
  bookTitle.innerHTML = book.title;
  addBook.appendChild(bookTitle);
  var bookAuthor = document.createElement('h2');
  bookAuthor.classList.add("bookAuthor");
  bookAuthor.innerHTML = book.author;
  addBook.appendChild(bookAuthor);
  var bookPages = document.createElement('p');
  bookPages.classList.add("numPages");
  bookPages.innerHTML = book.numPages;
  addBook.appendChild(bookPages);
  var bookRead = document.createElement('p');
  bookRead.classList.add("readStatus");
  bookRead.innerHTML = book.readStatus;
  addBook.appendChild(bookRead);

  docLib.appendChild(addBook);
}

function newBook() {
  var title = document.getElementById('title').value;
  var author = document.getElementById('author').value;
  var numPages = document.getElementById('numPages').value;
  var readStatus = document.getElementById('readStatus').value;

  let book = new Book(title, author, numPages, readStatus);
  console.log(book.title, book.author, book.numPages, book.readStatus);
  return book;
}

const btn = document.querySelector(".submit");
const newBookBtn = document.querySelector(".newBook");

btn.addEventListener("click", (event) => {
  event.preventDefault();
  addBookToLibrary(newBook());
  document.querySelector("#formContainer").classList.toggle("hidden");
})

newBookBtn.addEventListener("click", (event) => {
  event.preventDefault();
  document.querySelector("#formContainer").classList.toggle("hidden");
})
