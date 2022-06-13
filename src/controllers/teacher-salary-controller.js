const teacherSalaryService = require("../services/teacher-salary-service");

const getAllSalaries = (req, res) => {
  const { metro, city, district_name } = req.query;
  try {
    const allSalaries = teacherSalaryService.getAllSalaries({
      metro,
      city,
      district_name,
    });
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
