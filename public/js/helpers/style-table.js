const tableStyling = {
  styleTable: () => {
    // Flex the tbody of the table

    // Style each tr of the table

    // Style each child of each tr within the table
    const totalTR = tbody.childElementCount;
    const td = document.querySelectorAll("td");
    console.log(td);
    for (let i = 0; i < totalTR; i++) {
      td[i].childNodes.forEach((child) => {
        child.style.border = "1px solid black";
        child.style.textAlign = "center";
        child.style.padding = "10px";
      });
    }
  },
};

export default tableStyling;
