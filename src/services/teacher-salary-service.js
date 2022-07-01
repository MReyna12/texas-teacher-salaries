const Salaries = require("../database/teacher-salaries");

// API query params and parameter
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

// Front end search parameters

const getDistrictSalary = (metroName, districtName) => {
  try {
    const metroDistrict = Salaries.getDistrictSalary(metroName, districtName);
    return [metroDistrict];
  } catch (error) {
    throw error;
  }
};

module.exports = {
  getAllSalaries,
  getSalariesByCityName,
  getDistrictSalary,
};
