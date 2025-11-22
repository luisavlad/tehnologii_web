"use strict";

const express = require("express");
const { departments } = require("./db.js");
const router = require("./routes/departments");
require("dotenv").config();

const app = express();

app.use("/api", router);

app.set("port", process.env.PORT || 7000);

app.listen(app.get("port"), () => {
  console.log(`Server started on http://localhost:${app.get("port")}`);
});
