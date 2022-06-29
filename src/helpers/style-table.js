const tableStyling = {
  styleTable: () => {
    // Flex the tbody of the table
    const tbody = document.querySelector("tbody");
    tbody.style.display = "flex";

    // Style each tr of the table
    const childrenOfTBoday = tbody.childNodes;
    childrenOfTBoday.forEach((tr) => {
      tr.style.display = "flex";
      tr.style.flexDirection = "column";
      tr.style.border = "1px solid black";
    });

    // Style each child of each tr within the table
    const tr = document.querySelectorAll("tr");
    const totalTR = tbody.childElementCount;
    for (let i = 0; i < totalTR; i++) {
      tr[i].childNodes.forEach((child) => {
        child.style.border = "1px solid black";
        child.style.textAlign = "center";
        child.style.padding = "10px";
      });
    }
  },
};

export default tableStyling;
