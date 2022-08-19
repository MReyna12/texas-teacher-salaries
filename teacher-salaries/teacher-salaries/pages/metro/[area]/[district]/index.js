import clientPromise from "../../../../lib/mongodb";
import District from "../../../../components/District";

const district = (districtInfo) => {
  return (
    <div>
      <District data={districtInfo} />
    </div>
  );
};

export default district;

export async function getStaticProps(context) {
  //console.log(context);
  const client = await clientPromise;
  const db = client.db("teacher-salaries");
  // ** NEED TO FIND A WAY TO ONLY SEND THE DATA FOR THE SPECIFIC SCHOOL DISTRICT USING district: context.params.district ** //
  const districts = await db.collection("district-information").findOne({
    metro: context.params.area,
  }); // Based on what route is generated (via the getStaticPaths function below), search for the district data for the applicable metro area clicked by the user

  const districtInfo = JSON.parse(JSON.stringify(districts));
  // Maybe pass a second propr with the specific school district data only, so that way I only have one staticPath/prop call.

  return {
    props: { districtInfo },
  };
}

export async function getStaticPaths() {
  const client = await clientPromise;
  const db = client.db("teacher-salaries");

  const districts = await db
    .collection("district-information")
    .find()
    .toArray(); // Get all of the collections and put them into an array

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
