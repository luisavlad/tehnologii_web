let express = require("express");
let bodyParser = require("body-parser");
let cors = require("cors");
let app = express();
let router = express.Router();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());
app.use("/api", router);

const array = [
  { id: 1, name: "Luisa", age: 20 },
  { id: 2, name: "Paul", age: 20 },
  { id: 3, name: "Irina", age: 19 },
];

router.route("/getPersonById/:id").get((req, res) => {
  const id = req.params.id;
  let p;

  array.forEach((person) => {
    if (person.id == id) {
      p = person;
    }
  });
  res.json(p);
});

let port = 8000;
app.listen(port);

console.log("API is running");
