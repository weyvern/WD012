class Book {
  constructor(isbn, title, genre, author, read, readDate) {
    this.isbn = isbn;
    this.title = title;
    this.genre = genre;
    this.author = author;
    this.read = read || false;
    this.readDate = Date.parse(readDate) || '';
  }
}

class BookList {
  constructor(books, readBooks, bookToRead, nextBook, currentBook, lastRead) {
    this.books = books || [];
    this.readBooks = readBooks || 0;
    this.bookToRead = bookToRead || 0;
    this.nextBook = nextBook || '';
    this.currentBook = currentBook || '';
    this.lastRead = lastRead || '';
  }

  addBook(book) {
    this.books.push(book);
  }
}

// Create 3 books
const book1 = new Book(
  '123book',
  'LoTR: The Fellowship of the Ring',
  'Fantasy',
  'JRR Tolkien',
  true,
  '2021-02-20'
);
const book2 = new Book(
  '123book',
  'LoTR: The Two Towers',
  'Fantasy',
  'JRR Tolkien',
  true,
  '2021-02-20'
);
const book3 = new Book(
  '123book',
  'LoTR: The Return of the King',
  'Fantasy',
  'JRR Tolkien',
  true,
  '2021-02-20'
);
// Instantiate my booklist
const myBookList = new BookList();
// Test methods
myBookList.addBook(book1);
myBookList.addBook(book2);
myBookList.addBook(book3);
// Logs
console.log(myBookList);
