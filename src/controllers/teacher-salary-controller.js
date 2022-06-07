const teacherSalaryService = require("../services/teacher-salary-service");

const getAllSalaries = (req, res) => {
  const allSalaries = teacherSalaryService.getAllSalaries();
  res.send({
    status: "OK",
    data: allSalaries,
  });
};

const getSalariesByCityName = (req, res) => {
  const cityName = req.params.name.toLowerCase();
  const salariesByCity = teacherSalaryService.getSalariesByCityName(cityName);
  res.send({
    status: "OK",
    data: salariesByCity,
  });
};

module.exports = {
  getAllSalaries,
  getSalariesByCityName,
};
