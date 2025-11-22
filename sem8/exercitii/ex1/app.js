const express = require("express");
const app = express();
const port = 8000;
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
  let orderedBooks = books.sort((b1, b2) => {
    return b1.name.localeCompare(b2.name);
  });

  res.json(orderedBooks);
});
