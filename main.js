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
//metroBoxes.addEventListener("click", fetchSchoolDistrictData);
//console.log(metroBoxes);

async function fetchSchoolDistrictData() {
  const schoolDistrictData =
    "https://texas-teacher-salaries-api.herokuapp.com/";
  const response = await fetch(schoolDistrictData);
  const data = await response.json();
  console.log(data.data.houston_metro);
  createTable.newTable(data);
}

fetchSchoolDistrictData();
