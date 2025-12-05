const { Op } = require("sequelize");
const Employee = require("../models/employee");

const router = require("express").Router();

router
  .route("/employees")
  .get(async (req, res) => {
    try {
      const { name } = req.query;
      const { sorted } = req.query;

      const employees = await Employee.findAll({
        where: name
          ? {
              [Op.or]: [
                { firstName: { [Op.like]: `%${name}%` } },
                { lastName: { [Op.like]: `%${name}%` } },
              ],
            }
          : undefined,
        order: sorted ? [[sorted, "ASC"]] : undefined,
      });
      return res.status(200).json(employees);
    } catch (err) {
      return res.status(500).json(err);
    }
  })
  .post(async (req, res) => {
    try {
      const newEmployee = await Employee.create(req.body);
      return res.status(200).json(newEmployee);
    } catch (err) {
      return res.status(500).json(err);
    }
  });

router
  .route("/employees/:id")
  .get(async (req, res) => {
    try {
      const employee = await Employee.findByPk(req.params.id);

      if (employee) {
        return res.status(200).json(employee);
      } else {
        return res
          .status(404)
          .json({ error: `Employee with id ${req.params.id} not found` });
      }
    } catch (err) {
      return res.status(500).json(err);
    }
  })
  .put(async (req, res) => {
    try {
      const employee = await Employee.findByPk(req.params.id);

      if (employee) {
        const updateEmployee = await employee.update(req.body);
        return res.status(200).json(updateEmployee);
      } else {
        return res
          .status(404)
          .json({ error: `Employee with id ${req.params.id} not found` });
      }
    } catch (err) {
      return res.status(500).json(err);
    }
  })
  .delete(async (req, res) => {
    try {
      const employee = await Employee.findByPk(req.params.id);

      if (employee) {
        const deleteEmployee = await employee.destroy();
        return res
          .status(200)
          .json({ message: `Employee with id ${req.params.id} was deleted` });
      } else {
        return res
          .status(404)
          .json({ error: `Employee with id ${req.params.id} not found` });
      }
    } catch (err) {
      return res.status(500).json(err);
    }
  });

module.exports = router;
