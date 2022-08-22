const Salary = (props) => {
  const districtData = props.data.singleDistrictData[0];
  // Creates the table with the columns determined by years of experience + salary by degree type
  // If 2022-2023 salary data exists, then add the table and rows/cells to match the data for the applicable school district

  const yearsOfExperience = districtData.school_year[1]["2022-2023"].yoe;
  //console.log(yearsOfExperience[0]);

  const numberOfYears = Object.keys(yearsOfExperience);
  //console.log(numberOfYears);

  const salaryByDegree = yearsOfExperience.map((salaryObject) => {
    const bachelorSalary = salaryObject["10 months bachelor"];
    return bachelorSalary;
  });

  console.log(salaryByDegree);

  const degreeType = Object.keys(yearsOfExperience[0]);
  const salaryTableColumns = degreeType.map((degree) => {
    let tableHeader;
    if (degree.includes("bachelor")) {
      tableHeader = "Bachelor";
    } else if (degree.includes("master")) {
      tableHeader = "Master";
    } else if (degree.includes("doctorate")) {
      tableHeader = "Doctorate";
    }

    return (
      <tr>
        <th>{tableHeader}</th>
      </tr>
    );
  });

  const yearsRow = numberOfYears.map((year) => {
    //console.log(yearsOfExperience[year][year]);
    return <td>{year}</td>;
  });

  return (
    <table>
      <tbody>
        <tr>
          <th>Years</th>
          {yearsRow}
        </tr>
        {salaryTableColumns}
      </tbody>
    </table>
  );
};

export default Salary;
