const express = require("express");
const app = express();
const port = 3000;
const Book = require("./Book");

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
  let filteredBooks = [];
  if (req.query.genre) {
    filteredBooks = books.filter((x) => x.genre == req.query.genre);
  } else {
    filteredBooks = books;
  }

  res.json(filteredBooks);
});
