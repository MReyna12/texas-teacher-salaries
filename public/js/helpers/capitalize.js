const capitalize = {
  capFirstLetterDistrictName: () => {
    // Grab the span element that holds the district name value within its innerText and then put each word in an array
    let districtNameElement = document.querySelector(
      ".module-district-information"
    ).children[1];
    const districtNameArray = districtNameElement.innerText.split(/[\s-]+/);
    // Capitalize the first letter of each word in the array
    for (let i = 0; i < districtNameArray.length; i++) {
      districtNameArray[i] =
        districtNameArray[i][0].toUpperCase() +
        districtNameArray[i].substring(1);
    }
    // Set the innerText value to the newly capitalized string
    return (districtNameElement.innerText = districtNameArray.join(" "));
  },
  capFirstLetterCityState: () => {
    // Grab the span element that holds the city and state name values within its innerText and then put each word in an array
    let cityStateElement = document.querySelector(
      ".module-district-information"
    ).children[2];
    const cityStateArray = cityStateElement.innerText.split(" ");
    // Capitalize the first letter of each word in the array
    for (let i = 0; i < cityStateArray.length; i++) {
      cityStateArray[i] =
        cityStateArray[i][0].toUpperCase() + cityStateArray[i].substring(1);
    }
    // Set the innerText value to the newly capitalized string
    return (cityStateElement.innerText = cityStateArray.join(" "));
  },
};

export default capitalize;
