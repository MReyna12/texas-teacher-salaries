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
  createTable(data);
}

//console.log(data.austin_metro[1].school_year[1]["2022-2023"].yoe);

// Create table, rows, and cells and add the entire table to the DOM
function createTable(schoolDistrictData) {
  const jsonData = schoolDistrictData;
  const yearsOfExperience =
    jsonData.austin_metro[1].school_year[1]["2022-2023"].yoe;
  const degreeNames = Object.keys(
    jsonData.austin_metro[1].school_year[1]["2022-2023"].yoe.zero
  );
  const lengthOfYears = Object.keys(
    jsonData.austin_metro[1].school_year[1]["2022-2023"].yoe
  ).length;
  const table = document.createElement("table"),
    layout = document.querySelector(".layout-table");
  //table.style.width = "500px";
  //table.style.border = "1px solid black";
  if (yearsOfExperience) {
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
    console.log("Conditional is working!");
  }
  layout.appendChild(table);
  addTableData();
  addYearsOfExperience();
}

// Add data to table
async function addTableData() {
  // Apply the name of the headers to the th tags
  const tbody = document.querySelector("tbody");
  const firstRowBody = tbody.firstChild;
  const firstRowHead = firstRowBody.firstChild;
  const secondRowBody = firstRowBody.nextSibling;
  const secondRowHead = secondRowBody.firstChild;
  const lastRowBody = tbody.lastChild;
  const lastRowHead = lastRowBody.firstChild;
  const secondToLastRowBody = lastRowBody.previousSibling;
  const secondToLastRowHead = secondToLastRowBody.firstChild;
  firstRowHead.appendChild(document.createTextNode("Years of Experience"));
  secondRowHead.appendChild(document.createTextNode("Bachelor"));
  secondToLastRowHead.appendChild(document.createTextNode("Master"));
  lastRowHead.appendChild(document.createTextNode("Doctorate"));
}

// Add numbers to the years of experience row -- CONSIDER MOVING FROM addTableData FUCTION THE CREATION OF THE YOE HEADER
async function addYearsOfExperience() {
  // Target the tr in the first row of the table body and add a class to said row
  const tbody = document.querySelector("tbody");
  const firstRowBody = tbody.firstChild;
  firstRowBody.classList.add("module-first-row");
  // select all of the child tds of the element with the class module-first-row
  const years = document.querySelector(".module-first-row");
  const firstRowTD = years.querySelectorAll("td");
  // Add a number starting from zero and ending with the total years of experience for the applicable school district
  for (let i = 0; i < firstRowTD.length; i++) {
    firstRowTD[i].appendChild(document.createTextNode(`${i}`));
  }
}

fetchSchoolDistrictData();
