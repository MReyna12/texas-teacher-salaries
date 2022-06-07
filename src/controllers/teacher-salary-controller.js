const { getSalaryByCityName } = require("../database/teacher-salaries");
const teacherSalaryService = require("../services/teacher-salary-service");

const getAllSalaries = (req, res) => {
  try {
    const allSalaries = teacherSalaryService.getAllSalaries();
    res.send({
      status: "OK",
      data: allSalaries,
    });
  } catch (error) {
    res
      .status(error?.status || 500)
      .send({ status: "FAILED", data: { error: error?.message || error } });
  }
};

const getSalariesByCityName = (req, res) => {
  const cityName = req.params.name.toLowerCase();

  if (!getSalaryByCityName(cityName)) {
    res.status(400).send({
      status: "FAILED",
      data: {
        error:
          "Parameter 'cityName' can not be empty and must match an available city name",
      },
    });
  }
  try {
    const salariesByCity = teacherSalaryService.getSalariesByCityName(cityName);
    res.send({
      status: "OK",
      data: salariesByCity,
    });
  } catch (error) {
    res
      .status(error?.status || 500)
      .send({ status: "FAILED", data: { error: error?.message || error } });
  }
};

module.exports = {
  getAllSalaries,
  getSalariesByCityName,
};
