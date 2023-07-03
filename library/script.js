let myLibrary = [];
function Book(title, author, numPages, readStatus) {
  this.title = title;
  this.author = author;
  this.numPages = numPages;
  this.readStatus = readStatus;
}

function addBookToLibrary(book) {
  myLibrary.push(book);
}

function printDog() {

  console.log("here");
}

const btn = document.querySelector(".submit");
const newBookBtn = document.querySelector(".newBook");

btn.addEventListener("click", (event) => {
  event.preventDefault();
  newBook();
})

newBookBtn.addEventListener("click", (event) => {
  event.preventDefault();
  document.querySelector(".bookForm").style.display = "block";
})

function newBook() {
  var title = document.getElementById('title').value;
  var author = document.getElementById('author').value;
  var numPages = document.getElementById('numPages').value;
  var readStatus = document.getElementById('readStatus').value;

  let book = new Book(title, author, numPages, readStatus);
  console.log(book.title, book.author, book.numPages, book.readStatus);
  return book;
}
