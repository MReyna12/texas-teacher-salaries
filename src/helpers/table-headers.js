// NOTE: If this breaks, the method may need to have async added

// Add headers to table
const tableHeaders = {
  addTableHeaders: () => {
    // Apply the name of the headers to the first two th tags (YOE/Bachelor)
    const tbody = document.querySelector("tbody");
    const firstRowBody = tbody.firstChild;
    const firstRowHead = firstRowBody.firstChild;
    const secondRowBody = firstRowBody.nextSibling;
    const secondRowHead = secondRowBody.firstChild;
    firstRowHead.appendChild(document.createTextNode("Years of Experience"));
    secondRowHead.appendChild(document.createTextNode("Bachelor"));

    // Apply the name of the headers to all four th tags (YOE/Bachelor/Master/Doctorate)
    if (tbody.childElementCount > 3) {
      const lastRowBody = tbody.lastChild;
      const lastRowHead = lastRowBody.firstChild;
      const secondToLastRowBody = secondRowBody.nextSibling;
      const secondToLastRowHead = secondToLastRowBody.firstChild;
      secondToLastRowHead.appendChild(document.createTextNode("Master"));
      lastRowHead.appendChild(document.createTextNode("Doctorate"));
      // Apply the name of the headers to the first three th tags (YOE/Bachelor/Master)
    } else if (tbody.childElementCount === 3) {
      const secondToLastRowBody = secondRowBody.nextSibling;
      const secondToLastRowHead = secondToLastRowBody.firstChild;
      secondToLastRowHead.appendChild(document.createTextNode("Master"));
    }
  },
};

export default tableHeaders;
