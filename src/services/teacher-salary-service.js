const Salaries = require("../database/teacher-salaries");

const getAllSalaries = (filterParams) => {
  try {
    const allSalaries = Salaries.getAllSalaries(filterParams);
    return allSalaries;
  } catch (error) {
    throw error;
  }
};

const getSalariesByCityName = (cityName) => {
  try {
    const salaryByCity = Salaries.getSalaryByCityName(cityName);
    return salaryByCity;
  } catch (error) {
    throw error;
  }
};

module.exports = {
  getAllSalaries,
  getSalariesByCityName,
};
