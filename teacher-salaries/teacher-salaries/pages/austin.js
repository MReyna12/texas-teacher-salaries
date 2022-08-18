import clientPromise from "../lib/mongodb";
import Cards from "../components/Cards";

const austin = ({ austinSchoolDistricts }) => {
  //console.log(austinSchoolDistricts);
  return (
    <div>
      <h1>Austin Metro</h1>
      <Cards districtData={austinSchoolDistricts} />
    </div>
  );
};

export default austin;

export async function getStaticProps() {
  const client = await clientPromise;
  const db = client.db("teacher-salaries");

  const districts = await db.collection("district-information").findOne({}); // Contains the first document in the collection (which is an object). There is only one document which contains four metro area arrays, so it returns all school districts.
  const austinSchoolDistricts = districts.austin_metro; // Variable that contains only the school districts in the austin_metro area array. The prop returned below must be an object, so austinMetro variable is surrounded by {}
  //console.log(districts.austin_metro.length);

  return {
    props: { austinSchoolDistricts },
  };
}
