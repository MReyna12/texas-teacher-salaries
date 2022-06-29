import tableStyling from "./src/helpers/style-table.js";
import createTable from "./src/helpers/create-table.js";

// Hamburger Menu Open and Close
const primaryNav = document.querySelector(".primary-navigation");
const navToggle = document.querySelector(".mobile-nav-toggle");

navToggle.addEventListener("click", () => {
  const visibility = primaryNav.getAttribute("data-visible");

  if (visibility === "false") {
    primaryNav.setAttribute("data-visible", true);
    navToggle.setAttribute("aria-expanded", true);
  } else {
    primaryNav.setAttribute("data-visible", false);
    navToggle.setAttribute("aria-expanded", false);
  }
});

// Fetch school district data data from database
//const metroBoxes = document.querySelector(".module-metro-listener");
//console.log(metroBoxes);

async function fetchSchoolDistrictData() {
  const schoolDistrictData = "./src/database/db.json";
  const response = await fetch(schoolDistrictData);
  const data = await response.json();
  console.log(data);
  createTable.newTable(data);
}

// Add headers to table
async function addTableHeaders() {
  // Apply the name of the headers to the first two th tags (YOE/Bachelor)
  const tbody = document.querySelector("tbody");
  const firstRowBody = tbody.firstChild;
  const firstRowHead = firstRowBody.firstChild;
  const secondRowBody = firstRowBody.nextSibling;
  const secondRowHead = secondRowBody.firstChild;
  firstRowHead.appendChild(document.createTextNode("Years of Experience"));
  secondRowHead.appendChild(document.createTextNode("Bachelor"));

  // Apply the name of the headers to all four th tags (YOE/Bachelor/Master/Doctorate)
  if (tbody.childElementCount > 3) {
    const lastRowBody = tbody.lastChild;
    const lastRowHead = lastRowBody.firstChild;
    const secondToLastRowBody = secondRowBody.nextSibling;
    const secondToLastRowHead = secondToLastRowBody.firstChild;
    secondToLastRowHead.appendChild(document.createTextNode("Master"));
    lastRowHead.appendChild(document.createTextNode("Doctorate"));
    // Apply the name of the headers to the first three th tags (YOE/Bachelor/Master)
  } else if (tbody.childElementCount === 3) {
    const secondToLastRowBody = secondRowBody.nextSibling;
    const secondToLastRowHead = secondToLastRowBody.firstChild;
    secondToLastRowHead.appendChild(document.createTextNode("Master"));
  }
}

// Add numbers to the years of experience row -- CONSIDER MOVING FROM addTableData FUCTION THE CREATION OF THE YOE HEADER
async function addYearsOfExperience(schoolDistrictData) {
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
}

async function addSalaries(schoolDistrictData) {
  const jsonData = schoolDistrictData;
  const years = jsonData.austin_metro[1].school_year[1]["2022-2023"].yoe;
  //years.forEach((year) => console.log(Object.keys(year)));
  //console.log(years);
  const degreeNames = Object.keys(
    jsonData.austin_metro[1].school_year[1]["2022-2023"].yoe[0][0]
  );

  // Add the salary amount for the various degrees
  for (let i = 0; i < years.length; i++) {
    // Due to some keys not starting at 0 and going in order, I am using Object.keys() to obtain each object key
    const key = Object.keys(years[i]);
    // Target the first row tr and add a class to its next sibling (the second row)
    const firstRowBody = document.querySelector(".module-first-row");
    const secondRowBody = firstRowBody.nextSibling;
    secondRowBody.classList.add("module-second-row");

    // Select all of the child tds of the element with the class module-second-row
    const secondRowClass = document.querySelector(".module-second-row");
    const secondRowTD = secondRowClass.querySelectorAll("td");

    // Create variable that holds the dollar amounts -- loops through each year of experience
    const bachelorSalaryAmount = years[i][[key[0]]]["10 months bachelor"];

    // Create variable for appending salary amounts to the applicable tds
    const appendBachelorSalary = secondRowTD[i].appendChild(
      document.createTextNode(`${bachelorSalaryAmount}`)
    );

    // Add bachelor salary data to table
    appendBachelorSalary;

    if (degreeNames.length === 3) {
      // Target the second row tr and add a class to its next sibiling (the third row)
      const thirdRowBody = secondRowBody.nextSibling;
      thirdRowBody.classList.add("module-third-row");

      // Select all of the child tds of the element with the class module-third-row
      const thirdRowClass = document.querySelector(".module-third-row");
      const thirdRowTD = thirdRowClass.querySelectorAll("td");

      // Create variable that holds the dollar amounts -- loops through each year of experience
      const masterSalaryAmount = years[i][[key[0]]]["10 months master"];

      // Create variable for appending salary amounts to the applicable tds
      const appendMasterSalary = thirdRowTD[i].appendChild(
        document.createTextNode(`${masterSalaryAmount}`)
      );

      // Target the last row tr and add a class to it
      const lastRowBody = document.querySelector("tbody").lastChild;
      lastRowBody.classList.add("module-last-row");

      // Select all of the child tds of the element with the class module-last-row
      const lastRowClass = document.querySelector(".module-last-row");
      const lastRowTD = lastRowClass.querySelectorAll("td");

      // Create variable that holds the dollar amounts -- loops through each year of experience
      const doctorateSalaryAmount = years[i][[key[0]]]["10 months doctorate"];

      // Create variables for appending salary amounts to the applicable tds
      const appendDoctorateSalary = lastRowTD[i].appendChild(
        document.createTextNode(`${doctorateSalaryAmount}`)
      );

      // Add master and doctorate salary data to the table
      appendMasterSalary;
      appendDoctorateSalary;
    } else if (degreeNames.length === 2) {
      // Target the second row tr and add a class to its next sibiling (the third row)
      const thirdRowBody = secondRowBody.nextSibling;
      thirdRowBody.classList.add("module-third-row");

      // Select all of the child tds of the element with the class module-third-row
      const thirdRowClass = document.querySelector(".module-third-row");
      const thirdRowTD = thirdRowClass.querySelectorAll("td");

      // Create variable that holds the dollar amounts -- loops through each year of experience
      const masterSalaryAmount = years[i][key[0]]["10 months master"];

      // Create variable for appending salary amounts to the applicable tds
      const appendMasterSalary = thirdRowTD[i].appendChild(
        document.createTextNode(`${masterSalaryAmount}`)
      );

      // Add master salary data to the table
      appendMasterSalary;
    }
  }
}

fetchSchoolDistrictData();
