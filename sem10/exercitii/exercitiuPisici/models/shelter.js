const sequelize = require("../sequelize");
const { DataTypes } = require("sequelize");

const Shelter = sequelize.define("shelter", {
  shelterId: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  address: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  capacity: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  isFull: {
    type: DataTypes.BOOLEAN,
    allowNull: false,
  },
  status: {
    type: DataTypes.ENUM,
    allowNull: false,
    values: ["OPEN", "CLOSED", "UNDER_MAINTENANCE"],
  },
});

module.exports = Shelter;
