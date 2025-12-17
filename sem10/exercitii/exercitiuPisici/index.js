const express = require("express");
const app = express();
const port = 8000;

const sequelize = require("./sequelize");
const Shelter = require("./models/shelter");
const Cat = require("./models/cat");

Shelter.hasMany(Cat, { foreignKey: "shelterId", onDelete: "CASCADE" });
Cat.belongsTo(Shelter, { foreignKey: "shelterId" });

app.use(
  express.urlencoded({
    extended: true,
  })
);

app.use(express.json());

app.get("/cats", async (req, res) => {
  try {
    const cats = await Cat.findAll();
    res.json(cats);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

app.get("/shelters", async (req, res) => {
  try {
    const shelters = await Shelter.findAll();
    res.json(shelters);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

app.post("/shelters", async (req, res) => {
  try {
    const shelter = await Shelter.create(req.body);
    res.status(201).json(shelter);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

app.post("/cats", async (req, res) => {
  try {
    const cat = await Cat.create(req.body);
    res.status(201).json(cat);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

app.get("/shelters/:shelterId/cat/:catId", async (req, res) => {
  try {
    const cat = await Cat.findOne({
      where: {
        catId: req.params.catId,
        shelterId: req.params.shelterId,
      },
    });
    if (cat) {
      res.json(cat);
    } else {
      res
        .status(404)
        .json({ error: "Cat not found in the specified shelter." });
    }
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

app.delete("/cats/:catId", async (req, res) => {
  try {
    const cat = await Cat.destroy({
      where: {
        catId: req.params.catId,
      },
    });
    if (cat) {
      res.json({ message: "Cat deleted successfully." });
    } else {
      res.status(404).json({ error: "Cat not found." });
    }
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

sequelize
  .sync({ alter: true })
  .then(() => {
    console.log("Database connected & tables prepared.");
    app.listen(port, () => {
      console.log(`Server is running on http://localhost:${port}`);
    });
  })
  .catch((err) => {
    console.error("Unable to connect to the database:", err);
  });
