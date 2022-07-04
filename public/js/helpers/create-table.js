import tableStyling from "./style-table.js";
import tableHeaders from "./table-headers.js";
import yoe from "./years-of-experience.js";
import districtSalaries from "./salary.js";

// Creates the table, with the columns determined by years of experience + salary by degree type
const createTable = {
  newTable: () => {
    const layout = document.querySelector(".layout-table");
    const yearsOfExperience = jsonData.data[0].school_year[1]["2022-2023"].yoe;
    // If 2022-2023 salary data exists, then add the table and rows/cells to match the data for the applicable school district
    if (yearsOfExperience) {
      const degreeNames = Object.keys(
        jsonData.data[0].school_year[1]["2022-2023"].yoe[0][0]
      );
      const lengthOfYears = Object.keys(
        jsonData.data[0].school_year[1]["2022-2023"].yoe
      ).length;
      const table = document.createElement("table");
      for (let i = 0; i < degreeNames.length + 1; i++) {
        const tr = table.insertRow();
        const th = document.createElement("th");
        tr.appendChild(th);
        for (let j = 0; j < lengthOfYears; j++) {
          tr.insertCell();
        }
      }
      layout.appendChild(table);
      tableStyling.styleTable();
      tableHeaders.addTableHeaders();
      yoe.addYearsOfExperience(jsonData);
      districtSalaries.addSalaries(jsonData);
      // If 2022-2023 salary data DOES NOT exist, then add a p tag that contains a message stating as much to the user
    } else {
      const noTableText = jsonData.data[0].school_year[1]["2022-2023"];
      const paragraph = document.createElement("p");
      layout.appendChild(paragraph);
      paragraph.appendChild(document.createTextNode(`${noTableText}`));
    }
  },
};

export default createTable;
