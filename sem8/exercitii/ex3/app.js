const express = require("express");
const app = express();
const port = 8000;
const Book = require("./Book");

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Welcome to my API");
});

app.listen(port, () => {
  console.log("Running on port " + port);
});

let books = [
  new Book(1, "Dune", "sf", "Frank Herbert"),
  new Book(2, "Robinson Crusoe", "adventures", "Daniel Defoe"),
  new Book(3, "Foundation", "sf", "Asimov"),
];

app.get("/books", (req, res) => {
  let orderedBooks = books.sort((b1, b2) => {
    return b1.name.localeCompare(b2.name);
  });

  res.json(orderedBooks);
});

app.post("/addBook", (req, res) => {
  let newBook = new Book(
    req.body.id,
    req.body.name,
    req.body.genre,
    req.body.author
  );

  if (
    req.body.id == null ||
    req.body.name == null ||
    req.body.genre == null ||
    req.body.author == null
  ) {
    throw new Error("All fields are required!");
  }

  for (let i = 0; i < books.length; i++) {
    if (books[i].id == req.body.id) {
      throw new Error("Book already exists!");
    }
  }

  books.push(newBook);

  console.log(books);

  return res.json(newBook);
});

app.delete("/delete/:bookId", (req, res) => {
  bookToBeDeleted = books.find((b) => b.id == req.params.bookId);

  for (let i = 0; i < books.length; i++) {
    if (books[i].id == bookToBeDeleted.id) {
      books.splice(i, 1);
    }
  }

  return res.json(bookToBeDeleted);
});
