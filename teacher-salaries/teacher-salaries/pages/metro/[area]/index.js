import clientPromise from "../../../lib/mongodb";
import Cards from "../../../components/Cards";

const austin = ({ allDistrictData }) => {
  //console.log(allDistrictData);
  return (
    <section className="module-section-spacing">
      <div className="layout-container">
        <h1 className="module-h1-metro module-text-align-center">
          Austin Metro
        </h1>
        <Cards districtData={allDistrictData} />
      </div>
    </section>
  );
};

export default austin;

export async function getStaticProps(context) {
  const client = await clientPromise;
  const db = client.db("teacher-salaries");

  const districts = await db
    .collection("district-information")
    .findOne({ metro: context.params.area });
  const allDistrictData = districts.metro_data;
  //console.log(allDistrictData);

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
    .toArray();

  const metroNames = districts.map((district) => district.metro);
  //console.log(metroNames);

  const paths = metroNames.map((metro) => ({ params: { area: metro } }));

  return {
    paths,
    fallback: true,
  };
}
