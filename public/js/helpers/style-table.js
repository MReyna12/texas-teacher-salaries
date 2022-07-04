const tableStyling = {
  tableHeaderColor: () => {
    // Change the color of the table headers based on the metro area
    const pathName = window.location.pathname;
    const tableHeaders = document.querySelectorAll("th");
    tableHeaders.forEach((header) => {
      if (pathName.includes("austin_metro")) {
        header.style.background = "rgba(0, 150, 136, 255)";
      } else if (pathName.includes("dallas_metro")) {
        header.style.background = "rgba(255, 152, 0, 255)";
      } else if (pathName.includes("houston_metro")) {
        header.style.background = "rgba(3, 169, 244, 255)";
      } else if (pathName.includes("san_antonio_metro")) {
        header.style.background = "rgba(233, 30, 99, 255)";
      }
    });
  },
};

export default tableStyling;
