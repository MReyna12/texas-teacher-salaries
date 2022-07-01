const DB = require("./db.json");

// API query param and search param
const getAllSalaries = (filterParams) => {
  try {
    const allSchoolDistrictsData = DB;
    const metro = filterParams.metro;
    const cityName = filterParams.city;
    const districtName = filterParams.district_name;
    // If your search parameters include the specific metro area (i.e. houston_metro/san_antonio_metro) AND a city within said area then return all school districts in that city
    if (metro && cityName) {
      let singleCityData = allSchoolDistrictsData[metro].filter(
        (cities) => cities.city === cityName
      );
      return singleCityData;
      // If your search parameters include the applicable metro area (i.e. houston_metro/san_antonio_metro) AND a full district name then return that school district
    } else if (metro && districtName) {
      let singleDistrictData = allSchoolDistrictsData[metro].filter(
        (cities) => cities.district_name === districtName //TODO: add toLowerCase() and make all district names lowercase
      );
      return singleDistrictData;
      // Return all school districts in the metro area included in the search parameter
    } else if (metro) {
      return allSchoolDistrictsData[metro];
    }
    // If none of the conditionals above apply, then return ALL the data for every single school district in each metro area
    return allSchoolDistrictsData;
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

// Front end search param
const getAustinDistrictSalary = (districtName, metroName) => {
  try {
    console.log(`metro name is: ${metroName}`);
    const district = DB[metroName].find(
      (district) => district.district_name === districtName
    );
    const districtInfo = {
      district: district,
    };
    return districtInfo;
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
  getAustinDistrictSalary,
};
