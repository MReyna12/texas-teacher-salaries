import { nanoid } from "nanoid";
import planStyles from "../styles/Plans.module.css";

const Plans = (props) => {
  const schoolYears = props.data.data[0].schoolYear;

  const compensationPlan = (timePeriod) => {
    return schoolYears.map((year) => {
      // If the parameters are an object means there is a compensation plan AND salary data
      if (typeof year[timePeriod] === "object") {
        const compensationPlanUrl = year[timePeriod].compensation_plan;
        return (
          <a
            key={nanoid()}
            href={compensationPlanUrl}
            className={`module-display-block module-margin-bottom state-links-hover ${planStyles["display-links-block"]}`}
          >
            School Year {timePeriod}
          </a>
        );
        // If the parameters are a string that means there is no compensation plan, just a message informing the user the data is unavailable
      } else if (typeof year[timePeriod] === "string") {
        return <p key={nanoid()}>School Year {timePeriod} - Unavailable</p>;
      }
    });
  };

  return (
    <section>
      <div>
        <h6>Salary Table Links</h6>
        {compensationPlan("2022-2023")}
        {compensationPlan("2021-2022")}
      </div>
    </section>
  );
};

export default Plans;
