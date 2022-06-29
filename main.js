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
  /*const h1 = document.querySelector("h1").innerHTML;
  let metroArea = "";
  if (h1 === "Austin Metro") {
    metroArea = "austin_metro";
  } else if (h1 === "Dallas Metro") {
    metroArea = "dallas_metro";
  } else if (h1 === "Houston Metro") {
    metroArea = "houston_metro";
  } else if (h1 === "San Antonio Metro") {
    metroArea = "san_antonio_metro";
  }*/
  const schoolDistrictData = `https://texas-teacher-salaries-api.herokuapp.com/?metro=austin_metro`;
  const response = await fetch(schoolDistrictData);
  const data = await response.json();
  console.log(data.data);
  createTable.newTable(data);
}

fetchSchoolDistrictData();
