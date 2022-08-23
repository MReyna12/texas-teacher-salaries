import clientPromise from "../../../lib/mongodb";
import { nanoid } from "nanoid";
import Cards from "../../../components/Cards";

const metro = ({ data, metroArea }) => {
  return (
    <section className="module-section-spacing">
      <div className="layout-container">
        <Cards key={nanoid()} metroArea={metroArea} districtData={data} />
      </div>
    </section>
  );
};

export default metro;

export async function getStaticProps(context) {
  try {
    const client = await clientPromise;
    const db = client.db("teacher-salaries");

    const districts = await db
      .collection("district-information")
      .findOne({ metro: context.params.area }); // Based on what route is generated (via the getStaticPaths function below), search for the district data for the applicable metro area clicked by the user
    const allDistrictData = JSON.parse(JSON.stringify(districts));

    // Below contains only the props that need to be passed through to the Card component
    const metroArea = allDistrictData.metro;

    const data = allDistrictData.metro_data.map((district) => {
      return {
        districtName: district.district_name,
        abbreviatedName: district.abbreviated_name,
        logoUrl: district.logo,
      };
    });

    return {
      props: { data, metroArea },
    };
  } catch (err) {
    console.error(err);
  }
}

export async function getStaticPaths() {
  try {
    const client = await clientPromise;
    const db = client.db("teacher-salaries");

    const districts = await db
      .collection("district-information")
      .find()
      .toArray(); // Get all of the collections and put them into an array

    const metroNames = districts.map((district) => district.metro); // Create an array of the metro area names

    const paths = metroNames.map((metro) => ({ params: { area: metro } })); // Dynamically generate the routes for the metro pages

    return {
      paths,
      fallback: false,
    };
  } catch (err) {
    console.error(err);
  }
}
