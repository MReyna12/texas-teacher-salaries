const express = require("express");
const teacherSalaryController = require("../controllers/teacher-salary-controller");

const router = express.Router();

router.get("/", teacherSalaryController.getAllSalaries);

router.get("/:name", teacherSalaryController.getSalariesByCityName);

module.exports = router;
