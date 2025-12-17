const sequelize = require("../sequelize");
const { DataTypes } = require("sequelize");

const Cat = sequelize.define("cat", {
  catId: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  age: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  breed: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  isSterilized: {
    type: DataTypes.BOOLEAN,
    allowNull: false,
  },
  weight: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  shelterId: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
});

module.exports = Cat;
