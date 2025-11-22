const express = require("express");
const { books } = require("../app.js");
const status = express.Router();

status.get("/", (req, res) => {
  res.status(200).send("Serverul functioneaza!");
});

module.exports = status;
