// Add numbers to the years of experience row
const yoe = {
  addYearsOfExperience: (schoolDistrictData) => {
    // Use JSON data to create an array of objects that hold the years of experience and applicable salary amounts
    const jsonData = schoolDistrictData;
    const yearsOfExperience =
      jsonData.austin_metro[1].school_year[1]["2022-2023"].yoe;
    // Target the tr in the first row of the table body and add a class to said row
    const tbody = document.querySelector("tbody");
    const firstRowBody = tbody.firstChild;
    firstRowBody.classList.add("module-first-row");
    // Select all of the child tds of the element with the class module-first-row
    const years = document.querySelector(".module-first-row");
    const firstRowTD = years.querySelectorAll("td");
    // Add the applicable keys to the DOM to reflect the requisite years of experience necessary for various salaries
    for (let i = 0; i < firstRowTD.length; i++) {
      const yoeKeys = Object.keys(yearsOfExperience[i]);
      firstRowTD[i].appendChild(document.createTextNode(`${yoeKeys[0]}`));
    }
  },
};

export default yoe;
