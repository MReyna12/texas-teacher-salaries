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
async function fetchSchoolDistrictData() {
  const schoolDistrictData = "./src/database/db.json";
  const response = await fetch(schoolDistrictData);
  const data = await response.json();
  //console.log(data.austin_metro[1].school_year[1]["2022-2023"].yoe);
  createTable(data);
}

// Create table, rows, and cells and add the entire table without data to the DOM or add a paragraph to the DOM to reflect no 2022-2023 salary data available
function createTable(schoolDistrictData) {
  const jsonData = schoolDistrictData;
  const layout = document.querySelector(".layout-table");
  const yearsOfExperience =
    jsonData.austin_metro[1].school_year[1]["2022-2023"].yoe;
  // If 2022-2023 salary data exists, then add the table and rows/cells to match the data for the applicable school district
  if (yearsOfExperience) {
    const degreeNames = Object.keys(
      jsonData.austin_metro[1].school_year[1]["2022-2023"].yoe[0]["0"]
    );
    const lengthOfYears = Object.keys(
      jsonData.austin_metro[1].school_year[1]["2022-2023"].yoe
    ).length;
    const table = document.createElement("table");
    for (let i = 0; i < degreeNames.length + 1; i++) {
      const tr = table.insertRow();
      tr.style.border = "1px solid black";
      const th = document.createElement("th");
      tr.appendChild(th);
      for (let j = 0; j < lengthOfYears; j++) {
        const td = tr.insertCell();
        td.style.border = "1px solid black";
      }
    }
    layout.appendChild(table);
    addTableHeaders();
    addYearsOfExperience();
    addSalaries(jsonData);
    // If 2022-2023 salary data DOES NOT exist, then add a p tag that contains a message stating as much to the user
  } else {
    const noTableText = jsonData.austin_metro[3].school_year[1]["2022-2023"];
    const paragraph = document.createElement("p");
    layout.appendChild(paragraph);
    paragraph.appendChild(document.createTextNode(`${noTableText}`));
  }
}

// Add data to table
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
async function addYearsOfExperience() {
  // Target the tr in the first row of the table body and add a class to said row
  const tbody = document.querySelector("tbody");
  const firstRowBody = tbody.firstChild;
  firstRowBody.classList.add("module-first-row");
  // Select all of the child tds of the element with the class module-first-row
  const years = document.querySelector(".module-first-row");
  const firstRowTD = years.querySelectorAll("td");
  // Add a number starting from zero and ending with the total years of experience for the applicable school district
  for (let i = 0; i < firstRowTD.length; i++) {
    firstRowTD[i].appendChild(document.createTextNode(`${i}`));
  }
}

async function addSalaries(schoolDistrictData) {
  const jsonData = schoolDistrictData;
  const years = jsonData.austin_metro[1].school_year[1]["2022-2023"].yoe;
  const degreeNames = Object.keys(
    jsonData.austin_metro[1].school_year[1]["2022-2023"].yoe[0]["0"]
  );

  // Add the salary amount for the various degrees
  for (let i = 0; i < years.length; i++) {
    // Target the first row tr and add a class to its next sibling (the second row)
    const firstRowBody = document.querySelector(".module-first-row");
    const secondRowBody = firstRowBody.nextSibling;
    secondRowBody.classList.add("module-second-row");

    // Select all of the child tds of the element with the class module-second-row
    const secondRowClass = document.querySelector(".module-second-row");
    const secondRowTD = secondRowClass.querySelectorAll("td");

    // Create variable that holds the dollar amounts -- loops through each year of experience
    const bachelorSalaryAmount = years[i][`${i}`]["10 months bachelor"];

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
      const masterSalaryAmount = years[i][`${i}`]["10 months master"];

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
      const doctorateSalaryAmount = years[i][`${i}`]["10 months doctorate"];

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
      const masterSalaryAmount = years[i][`${i}`]["10 months master"];

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
