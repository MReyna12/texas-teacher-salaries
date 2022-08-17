import Head from "next/head"; // Allows you to put a Head tag so you can include a title, meta tags, etc.
import Image from "next/image";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Texas Teacher Salaries</title>
        <meta
          name="keywords"
          contect="teachers, texas, salaries, school districts"
        ></meta>
      </Head>
      <h1>Welcome to Next</h1>
    </div>
  );
}
