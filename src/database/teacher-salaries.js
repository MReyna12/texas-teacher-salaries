const DB = require("./db.json");

const getAllSalaries = (filterParams) => {
  try {
    const allSchoolDistrictsData = DB;
    const metro = filterParams.metro;
    const cityName = filterParams.city;
    // If your search parameters include the specific metro area (i.e. houston_metro/san_antonio_metro) AND a city within said area then return all school districts in that city
    if (metro && cityName) {
      let singleCityData = allSchoolDistrictsData[metro].filter(
        (cities) => cities.city === cityName
      );
      return singleCityData;
      // If your search parameters include the specific metro area (i.e. houston_metro/san_antonio_metro) then return all school districts in that metro area
    } else if (metro) {
      return allSchoolDistrictsData[metro];
    } else if (cityName) {
      console.log("hello");
      let newData = allSchoolDistrictsData.filter((districts) => {
        districts["houston_metro"].city === cityName;
      });
      return newData;
    }
    // Figure out how to only output the relevant year salary
    /*if (filterParams.city && filterParams.year) {
      return district.find(
        (district) =>
          district.school_year === filterParams.year &&
          district.city === filterParams.city
      );
    }*/
    // If none of the conditionals above apply, then return ALL the data for every single school district in each metro area
    //return allSchoolDistrictsData;
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

/*return allSchoolData[cityDistrict].filter(
  (district) => district
  //district.city.includes(filterParams.city)*/
