// Your library array
const myLibrary = [];

console.log("JS is running");

// Book constructor
function Book(title, author, pages, read) {
  this.id = crypto.randomUUID();
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
}

// Add book to array
function addBookToLibrary(title, author, pages, read) {
  const book = new Book(title, author, pages, read);
  myLibrary.push(book);
}

// Render all books
function renderBooks() {
  const libraryContainer = document.getElementById("library");
  libraryContainer.innerHTML = ""; // clear

  myLibrary.forEach(book => {
    const card = document.createElement("div");
    card.classList.add("book-card");

    card.innerHTML = `
      <div class="book-card">
      <h3>${book.title}</h3>
      <p><strong>Author:</strong> ${book.author}</p>
      <p><strong>Pages:</strong> ${book.pages}</p>
      <p><strong>Read:</strong> ${book.read ? "Yes" : "No"}</p>
      </div>
    `;

    libraryContainer.appendChild(card);
  });
}

// FORM LOGIC
const form = document.getElementById("book-form");

form.addEventListener("submit", (event) => {
  event.preventDefault(); // stop page refresh

  // get values
  const title = document.getElementById("title").value;
  const author = document.getElementById("author").value;
  const pages = document.getElementById("pages").value;
  const read = document.getElementById("read").checked;

  // add book
  addBookToLibrary(title, author, pages, read);

  // display
  renderBooks();

  // optional: clear the form
  form.reset();
});

// Add a sample book to test
addBookToLibrary("The Hobbit", "J.R.R. Tolkien", 310, true);
renderBooks();
