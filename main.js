import createTable from "./src/helpers/create-table.js";
import districtInfo from "./src/helpers/district-information.js";

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

// What I want to happen:
//   1. User clicks a school district box on one of the four metro pages.
//   2. The user is then directed to the requested district page and will see the data for said school district.

// How I want the above to happen:
//   1. A function should read the h1 of the current metro page to determine what metro area should go into the url.
//   2. The same or a new function should obtain the h2 value of the district clicked by the user to add the district name to the url.
//   3. Once the two variables above are determined and the user clicks a district box, the fetch request should be made and then the data is displayed when the district page loads.

// What I have tried:
//   1. Setting a click event on a district box to run a fetch request with: (a) no variables, which means the response returned from the fetch should show ALL metro area ISD data and (b) with a metroArea variable.
//      Error received for 1(a): "Uncaught (in promise) TypeError: NetworkError when attempting to fetch resource" and "Uncaught TypeError: can't access property "addEventListener, metroBoxes is null".
//      Error received for 1(b): The h1 variable is null as it seems the the function is trying to the value for a h1 on the new page as opposed to the previous page.
//   2. Removing the href='district.html' so that the user is not automatically redirected to the district.html page. My hope was that the fetchSchoolDistrictData function would run, but it did not work.
//      Error recevied for 2: "Uncaught (in promise) TypeError: NetworkError when attempting to fetch resource"
//   3. Instead of using the heroku URL, I tried the local file path to db.json, but I get the same error as number 2.
//   4. Using setTimeout() to try to delay loading district.html, but it either doesn't work or I incorrectly used setTimeout().
//   5. Moving the class .module-metro-listener to various elements instead of the a tag (all located within dallas.html on the allen ISD a tag). I thought maybe the putting the listener on a class located on the <a> tag might be causing issues.

// What I think may be causing the errors:
//   1. Event listener - the code will run fine without the event listener, but as soon as I added the event listener I started to run into the issues above. My fetch request I believe is being interrupted by navigating to the district page.
//      When I check the network tab of my dev tools, I can see that the fetch request is being aborted (NS_BINDING_ABORTED). Is there a way to not go to the next page until the fetch request has been made?
//   2. server.js - unsure if there may be something missing.

// Fetch school district data data from database on click of a district box
//const metroBoxes = document.querySelector(".module-metro-listener");
//metroBoxes.addEventListener("click", fetchSchoolDistrictData);
//console.log(metroBoxes);

/*async function fetchSchoolDistrictData() {
  //console.log("Function fired");
  //const link = document.querySelector(".module-metro-listener");
  //let url = new URL(`https://texas-teacher-salaries-api.herokuapp.com/`);
  //url.searchParams.set("metro", "dallas_metro");
  //url.searchParams.set("district_name", "allen independent school district");
  //console.log(url);
  //const schoolDistrictData = setParameters();
  console.log(schoolDistrictData);
  const response = await fetch(schoolDistrictData);
  const data = await response.json();
  console.log(data);
  districtInfo.setDistrictInfo(data);
  createTable.newTable(data);
}*/

//fetchSchoolDistrictData();

// Fetch school district data from database without a click event (works without issue)

async function fetchSchoolDistrictData() {
  const schoolDistrictData = `https://texas-teacher-salaries-api.herokuapp.com/?metro=austin_metro`;
  const response = await fetch(schoolDistrictData);
  const data = await response.json();
  console.log(data.data);
  //createTable.newTable(data);
}
fetchSchoolDistrictData();

//const dataPage = document.body.getAttribute("data-page");
/*if (dataPage === "district.html") {
  async function fetchSchoolDistrictData() {
  const h1 = document.querySelector("h1").innerHTML;
  let metroArea = "";
  if (h1 === "Austin Metro") {
    metroArea = "austin_metro";
  } else if (h1 === "Dallas Metro") {
    metroArea = "dallas_metro";
  } else if (h1 === "Houston Metro") {
    metroArea = "houston_metro";
  } else if (h1 === "San Antonio Metro") {
    metroArea = "san_antonio_metro";
  }
    const schoolDistrictData = `https://texas-teacher-salaries-api.herokuapp.com/?metro=austin_metro`;
    const response = await fetch(schoolDistrictData);
    const data = await response.json();
    console.log(data.data);
    createTable.newTable(data);
  }
  fetchSchoolDistrictData();
}*/
