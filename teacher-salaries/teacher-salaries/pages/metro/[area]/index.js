import clientPromise from "../../../lib/mongodb";
import { nanoid } from "nanoid";
import Cards from "../../../components/Cards";

const metro = ({ allDistrictData }) => {
  return (
    <section className="module-section-spacing">
      <div className="layout-container">
        <Cards key={nanoid()} districtData={allDistrictData} />
      </div>
    </section>
  );
};

export default metro;

export async function getStaticProps(context) {
  const client = await clientPromise;
  const db = client.db("teacher-salaries");

  const districts = await db
    .collection("district-information")
    .findOne({ metro: context.params.area }); // Based on what route is generated (via the getStaticPaths function below), search for the district data for the applicable metro area clicked by the user
  const allDistrictData = JSON.parse(JSON.stringify(districts));
  console.log(allDistrictData);

  return {
    props: { allDistrictData },
  };
}

export async function getStaticPaths() {
  const client = await clientPromise;
  const db = client.db("teacher-salaries");

  const districts = await db
    .collection("district-information")
    .find()
    .toArray(); // Get all of the collections and put them into an array

  const metroNames = districts.map((district) => district.metro); // Create an array of the metro area names
  //console.log(metroNames);

  const paths = metroNames.map((metro) => ({ params: { area: metro } })); // Dynamically generate the routes for the metro pages

  return {
    paths,
    fallback: true,
  };
}
