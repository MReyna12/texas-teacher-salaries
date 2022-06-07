const DB = require("./db.json");

const getAllSalaries = (filterParams) => {
  try {
    let district = DB["houston school districts"];
    console.log(filterParams);
    if (filterParams.city) {
      return district.filter((district) =>
        district.city.includes(filterParams.city)
      );
    }
    if (filterParams.year) {
      return district.filter((district) => {
        district.school_year.includes(filterParams.year);
      });
    }
    return district;
  } catch (error) {
    throw {
      status: 500,
      message: error,
    };
  }
};

const getSalaryByCityName = (nameOfCity) => {
  try {
    const cityName = DB["houston school districts"].find(
      (district) => district.city === nameOfCity
    );
    if (!cityName) {
      throw {
        status: 400,
        message: `Can't find the city: ${nameOfCity}. Please check spelling and confirm the city is included in the list of cities providing teacher salaries.`,
      };
    }
    return cityName;
  } catch (error) {
    throw {
      status: error?.status || 500,
      message: error?.message || error,
    };
  }
};

module.exports = {
  getAllSalaries,
  getSalaryByCityName,
};
