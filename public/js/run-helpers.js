// Moved all the helpers for the district.ejs file into one file and only include this file as a script in the district.ejs file

import tableStyling from "./helpers/style-table.js";
import capitalize from "./helpers/capitalize.js";
import informationNotAvailable from "./helpers/display-none.js";

tableStyling.tableHeaderColor();
informationNotAvailable.displayNone();
capitalize.capFirstLetterDistrictName();
capitalize.capFirstLetterCityState();
