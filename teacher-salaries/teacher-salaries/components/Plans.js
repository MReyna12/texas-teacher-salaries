const Plans = (props) => {
  const schoolYears = props.data.singleDistrictData[0].school_year;

  const compensationPlan = (timePeriod) => {
    return schoolYears.map((year) => {
      // If the parameters are an object means there is a compensation plan AND salary data
      if (typeof year[timePeriod] === "object") {
        const compensationPlanUrl = year[timePeriod].compensation_plan;
        return (
          <a
            href={compensationPlanUrl}
            className="module-display-block module-margin-bottom"
          >
            School Year {timePeriod}
          </a>
        );
        // If the parameters are a string that means there is no compensation plan, just a message informing the user the data is unavailable
      } else if (typeof year[timePeriod] === "string") {
        return <p>School Year {timePeriod} - Unavailable</p>;
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
