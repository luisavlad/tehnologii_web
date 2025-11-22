const express = require("express");
const app = express();
const port = 8000;
const Book = require("./Book");
const router = require("./router/books");

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use("/api", router);

app.listen(port, () => {
  console.log("Running on port " + port);
});

let books = [
  new Book(1, "Dune", "sf", "Frank Herbert"),
  new Book(2, "Robinson Crusoe", "adventures", "Daniel Defoe"),
  new Book(3, "Foundation", "sf", "Asimov"),
];
