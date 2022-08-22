import clientPromise from "../../../../lib/mongodb";
import District from "../../../../components/District";
import Salary from "../../../../components/Salary";

const district = (singleDistrictData) => {
  return (
    <section className="module-section-spacing">
      <div className="layout-container layout-flex layout-center-column layout-space-between">
        <District data={singleDistrictData} />
        <Salary data={singleDistrictData} />
      </div>
    </section>
  );
};

export default district;

export async function getStaticProps(context) {
  //console.log(context);
  const client = await clientPromise;
  const db = client.db("teacher-salaries");
  // Based on what route is generated (via the getStaticPaths function below), search for the district data for the applicable metro area
  const districts = await db.collection("district-information").findOne({
    metro: context.params.area,
  });

  // Only return the data for the district that matches the district chosen by the user
  const singleDistrictData = districts.metro_data.filter(
    (district) => district.district_name === context.params.district
  );

  return {
    props: { singleDistrictData },
  };
}

export async function getStaticPaths() {
  const client = await clientPromise;
  const db = client.db("teacher-salaries");

  const districts = await db
    .collection("district-information")
    .find()
    .toArray(); // Get all of the collections and put them into an array

  // Because we need to generate the data for two dynamic routes ([area] and [district]), getStaticPaths requires the paths value to include BOTH params.
  // For example, the area associated with the district is generated for every single district route
  const nestedPaths = districts.map((object) => {
    return object.metro_data.map((district) => ({
      params: { area: object.metro, district: district.district_name },
    }));
  });

  const paths = nestedPaths.flat();

  return {
    paths,
    fallback: false,
  };
}
