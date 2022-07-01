const express = require("express");
const teacherSalaryController = require("../controllers/teacher-salary-controller");

const router = express.Router();

// API endpoints
router.get("/", teacherSalaryController.getAllSalaries);

router.get("/:name", teacherSalaryController.getSalariesByCityName);

// Render .ejs files
router.get("/");

module.exports = router;
