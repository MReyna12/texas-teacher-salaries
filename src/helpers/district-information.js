const districtInfo = {
  setDistrictInfo: (schoolDistrictData) => {
    const jsonData = schoolDistrictData;
    const districtName = jsonData.data[1].district_name;
    const city = jsonData.data[1].city;
    const superintendentName = jsonData.data[1].superintendent_name;
    const superintendentPhone = jsonData.data[1].superintendent_telephone;
    const superintendentTwitter = jsonData.data[1].superintendent_twitter;
    const boardPhone = jsonData.data[1].board_of_education_telephone;
    const boardEmail = jsonData.data[1].board_of_education_email;
    const boardTrustees = jsonData.data[1].board_of_education_trustees;
    const children = document.querySelector(
      ".module-district-information"
    ).children;
    const arrayOfChildren = Object.values(children);
    arrayOfChildren.forEach((child) => {
      // Set district name
      if (child.innerHTML === "District Name:") {
        child.innerText += ` ${districtName}`;
        // Set city name
      } else if (child.innerHTML === "City:") {
        child.innerText += ` ${city}`;
        // Set superintendent name
      } else if (child.innerHTML === "Superintendent:") {
        child.innerText += ` ${superintendentName}`;
        // Set superintendent phone
      } else if (child.innerHTML === "Superintendent Telephone:") {
        child.innerText += ` ${superintendentPhone}`;
        // Set superintendent twitter handle
      } else if (child.innerHTML === "Superintendent Twitter:") {
        child.innerText += ` ${superintendentTwitter}`;
        // Set board of trustees phone
      } else if (child.innerHTML === "Board Telephone:") {
        child.innerText += ` ${boardPhone}`;
        // Set board of trustees email
      } else if (child.innerHTML === "Board Email:") {
        child.innerText += ` ${boardEmail}`;
        // Set board of trustees link to individual trustees
      } else if (child.innerHTML === "Board of Trustees:") {
        child.innerText += ` ${boardTrustees}`;
      }
    });
  },
};

export default districtInfo;
