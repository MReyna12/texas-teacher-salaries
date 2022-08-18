import clientPromise from "../lib/mongodb";

const about = () => {
  return (
    <div>
      <h1>About</h1>
    </div>
  );
};

export default about;

export async function getStaticProps() {
  const client = await clientPromise;
  const db = client.db("teacher-salaries");

  const data = await db.collection("district-information").findOne();
  const austinMetro = data.austin_metro;
  console.log(data.austin_metro);

  return {
    props: { austinMetro },
  };
}
