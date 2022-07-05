import tableStyling from "./helpers/style-table.js";
import capitalize from "./helpers/capitalize.js";
import informationNotAvailable from "./helpers/display-none.js";

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

tableStyling.tableHeaderColor();
informationNotAvailable.displayNone();
capitalize.capFirstLetterDistrictName();
capitalize.capFirstLetterCityState();
