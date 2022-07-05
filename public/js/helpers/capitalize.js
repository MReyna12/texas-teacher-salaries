const capitalize = {
  capFirstLetter: () => {
    let districtNameElement = document.querySelector(
      ".module-district-information"
    ).children[1];
    const districtNameArray = districtNameElement.innerText.split(" ");
    for (let i = 0; i < districtNameArray.length; i++) {
      districtNameArray[i] =
        districtNameArray[i][0].toUpperCase() +
        districtNameArray[i].substring(1);
    }
    districtNameElement.innerText = districtNameArray.join(" ");
  },
};

export default capitalize;
