const DB = require("./db.json");

const getAllSalaries = () => {
  return DB["houston school districts"];
};

const getSalaryByCityName = (nameOfCity) => {
  const cityName = DB["houston school districts"].find(
    (district) => district.city === nameOfCity
  );
  return cityName;
};

module.exports = {
  getAllSalaries,
  getSalaryByCityName,
};
