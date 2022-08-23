import { useRouter } from "next/router";
import { nanoid } from "nanoid";
import salaryStyles from "../styles/Salary.module.css";

const Salary = (props) => {
  // Data that is passed via the prop is in an array, so we use the 0 index to target the applicable data
  const districtData = props.data.singleDistrictData[0];

  // If this value is falsy, then the function generateTableData is not going to run and the paragraph in the return statement will be displayed
  const yearsOfExperience = districtData.school_year[1]["2022-2023"].yoe;

  // If yearsOfExperience is truthy, then this function will run and generate all the data for the salary table
  const generateTableData = () => {
    const numberOfYears = Object.keys(yearsOfExperience);

    const degreeType = Object.keys(yearsOfExperience[0]["0"]);

    // Determine what background color should be applied to the <th> tag based on which metro area the school district is located in/the user is viewing
    const router = useRouter();

    const metroArea = router.query.area;

    const headerBackgroundColor =
      metroArea === "austin"
        ? salaryStyles["module-th-background-color-austin"]
        : metroArea === "dallas"
        ? salaryStyles["module-th-background-color-dallas"]
        : metroArea === "houston"
        ? salaryStyles["module-th-background-color-houston"]
        : salaryStyles["module-th-background-color-san-antonio"];

    const salaryByDegree = (degreeType) => {
      return yearsOfExperience.map((salaryObject) => {
        const salarykey = Object.keys(salaryObject)[0];
        const salary = salaryObject[salarykey][degreeType];

        return (
          <td
            key={nanoid()}
            className={`${salaryStyles["module-table-spacing-border"]}`}
          >
            {salary}
          </td>
        );
      });
    };

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
        <tr
          key={nanoid()}
          className="layout-flex layout-flex-direction-column module-text-align-center"
        >
          {tableHeader === "Bachelor" && (
            <>
              <th
                className={`${salaryStyles["module-table-spacing-border"]} ${headerBackgroundColor}`}
              >
                {tableHeader}
              </th>
              {salaryByDegree(["10 months bachelor"])}
            </>
          )}
          {tableHeader === "Master" && (
            <>
              <th
                className={`${salaryStyles["module-table-spacing-border"]} ${headerBackgroundColor}`}
              >
                {tableHeader}
              </th>
              {salaryByDegree(["10 months master"])}
            </>
          )}
          {tableHeader === "Doctorate" && (
            <>
              <th
                className={`${salaryStyles["module-table-spacing-border"]} ${headerBackgroundColor}`}
              >
                {tableHeader}
              </th>
              {salaryByDegree(["10 months doctorate"])}
            </>
          )}
        </tr>
      );
    });

    const yearsRow = numberOfYears.map((year) => {
      return (
        <td
          key={nanoid()}
          className={`${salaryStyles["module-table-spacing-border"]}`}
        >
          {year}
        </td>
      );
    });

    return (
      <table>
        <tbody>
          <tr className="layout-flex layout-flex-direction-column module-text-align-center">
            <th
              className={`${salaryStyles["module-table-spacing-border"]} ${headerBackgroundColor}`}
            >
              Years
            </th>
            {yearsRow}
          </tr>
          {salaryTableColumns}
        </tbody>
      </table>
    );
  };

  return (
    <section className={salaryStyles["module-district-info-spacing"]}>
      {yearsOfExperience ? (
        generateTableData()
      ) : (
        <p>{districtData.school_year[1]["2022-2023"]}</p>
      )}
    </section>
  );
};

export default Salary;
