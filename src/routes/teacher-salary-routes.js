const express = require("express");
const teacherSalaryController = require("../controllers/teacher-salary-controller");

const router = express.Router();

router.get("/", teacherSalaryController.getAllSalaries);

router.get("/:name", teacherSalaryController.getSalariesByCityName);

router.get(
  "/:name/:salary/:schoolyear",
  teacherSalaryController.getSalariesByNameAndSchoolYear
);

module.exports = router;
