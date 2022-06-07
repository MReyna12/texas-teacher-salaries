const Salaries = require("../database/teacher-salaries");

const getAllSalaries = () => {
  const allSalaries = Salaries.getAllSalaries();
  return allSalaries;
};

const getSalariesByCityName = (cityName) => {
  const salaryByCity = Salaries.getSalaryByCityName(cityName);
  return salaryByCity;
};

const getSalariesByNameAndSchoolYear = () => {
  return;
};

module.exports = {
  getAllSalaries,
  getSalariesByCityName,
  getSalariesByNameAndSchoolYear,
};
