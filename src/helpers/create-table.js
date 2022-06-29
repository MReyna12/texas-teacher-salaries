import tableStyling from "./style-table.js";

const createTable = {
  newTable: (schoolDistrictData) => {
    const jsonData = schoolDistrictData;
    const layout = document.querySelector(".layout-table");
    const yearsOfExperience =
      jsonData.austin_metro[1].school_year[1]["2022-2023"].yoe;
    // If 2022-2023 salary data exists, then add the table and rows/cells to match the data for the applicable school district
    if (yearsOfExperience) {
      const degreeNames = Object.keys(
        jsonData.austin_metro[1].school_year[1]["2022-2023"].yoe[0][0]
      );
      const lengthOfYears = Object.keys(
        jsonData.austin_metro[1].school_year[1]["2022-2023"].yoe
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
      addTableHeaders();
      addYearsOfExperience(jsonData);
      addSalaries(jsonData);
      // If 2022-2023 salary data DOES NOT exist, then add a p tag that contains a message stating as much to the user
    } else {
      const noTableText = jsonData.austin_metro[1].school_year[1]["2022-2023"];
      const paragraph = document.createElement("p");
      layout.appendChild(paragraph);
      paragraph.appendChild(document.createTextNode(`${noTableText}`));
    }
  },
};

export default createTable;
