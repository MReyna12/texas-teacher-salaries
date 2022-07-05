const informationNotAvailable = {
  displayNone: () => {
    // Create a variable that stores an array of all of the children of module-district-information (all the data related to the district/superintendent/district board)
    let districtInformationChildren = Object.values(
      document.querySelector(".module-district-information").children
    );
    // Look at the innerText value for each child and if the value is equal to 'N/A' and the element is a span (because these are the only html elements with values that could include N/A), then set that element's display to none
    return districtInformationChildren.forEach((element) => {
      if (element.innerText === "N/A" && element.localName === "span") {
        console.log(element);
        element.style.display = "none";
      }
    });
  },
};

export default informationNotAvailable;
