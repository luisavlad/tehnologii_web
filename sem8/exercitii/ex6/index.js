"use strict";

const express = require("express");
const departmentsRouter = require("./routes/departments");
const statusRouter = require("./routes/status");

const app = express();

app.use((err, req, res, next) => {
  console.log(err.stack);
  res.status(500).json({ error: "Something broke!" });
});

const middleware = (req, res, next) => {
  console.log(`method: ${req.method}\nurl: ${req.url}`);
  next();
};

app.use(middleware);

app.use("/api", departmentsRouter);
app.use("/status", statusRouter);

app.set("port", 7000);

app.listen(app.get("port"), () => {
  console.log(`Server started on http://localhost:${app.get("port")}`);
});
