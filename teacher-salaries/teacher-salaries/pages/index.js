import Head from "next/head"; // Allows you to put a Head tag so you can include a title, meta tags, etc.
import Image from "next/image";
import Link from "next/link";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Texas Teacher Salaries</title>

        <meta
          name="keywords"
          content="teachers, texas, salaries, school districts"
        ></meta>
        <meta
          name="description"
          content="Texas teacher new hire salaries in the metro areas of Austin, Dallas, Houston, and San Antonio"
        ></meta>
      </Head>
      <section className="module-section-spacing state-bg-black">
        <div className="layout-container module-text-align-center">
          <div className="layout-flex state-display-block layout-space-between">
            <div
              className={`layout-flex layout-justify-content-center layout-flex-direction-column ${styles["layout-teacher-text"]}`}
            >
              <div>
                <h1
                  className={`${styles["module-h1-index"]} state-text-bold state-font-white`}
                >
                  Compare Teacher Salaries <br />
                  Across The State Of Texas
                  <span className={`${styles["state-period-color"]}`}>.</span>
                </h1>
              </div>
              <div>
                <p
                  className={`${styles["module-p-underH1Spacing"]} state-font-white`}
                >
                  TTS provides teachers an easy way to view new hire salaries
                  <br />
                  for school districts in the metro areas of Austin, Dallas,
                  <br />
                  Houston, & San Antonio.
                </p>
              </div>
            </div>
            <div
              className={`layout-flex layout-justify-content-center ${styles["layout-display-none"]}`}
            >
              <div className={`${styles["module-card"]}`}>
                <Image
                  src="/male-teacher2.png"
                  alt="Headshot of teacher"
                  width={300}
                  height={450}
                  layout="responsive"
                />

                <div
                  className={`${styles["module-card-container"]} ${styles["state-bg-white"]}`}
                >
                  <h5
                    className={`state-text-bold ${styles["module-teacher-name"]}`}
                  >
                    Michael Ramirez
                  </h5>
                  <p className={`${styles["module-card-teacher-spacing"]}`}>
                    English Teacher
                  </p>
                  <p className="state-text-bold">HISD</p>
                </div>
              </div>
              <div className="layout-flex layout-flex-direction-column layout-space-between">
                <div
                  className={`${styles["module-teacher-img"]} ${styles["module-teacher1-img"]}`}
                >
                  <Image
                    src="/male-teacher.png"
                    alt="Headshot of teacher"
                    width={200}
                    height={150}
                    layout="responsive"
                  />
                </div>
                <div
                  className={`${styles["module-teacher-img"]} ${styles["module-teacher2-img"]}`}
                >
                  <Image
                    src="/female-teacher2.png"
                    alt="Photo of teacher"
                    width={200}
                    height={150}
                    layout="responsive"
                  />
                </div>
                <div
                  className={`${styles["module-teacher-img"]}  ${styles["module-teacher3-img"]} `}
                >
                  <Image
                    src="/female-teacher3.png"
                    alt="Photo of teacher"
                    width={200}
                    height={150}
                    layout="responsive"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="module-section-spacing">
        <div className="layout-container">
          <div
            className={`layout-flex layout-space-between ${styles["layout-classroom-container"]}`}
          >
            <div>
              <Image
                className="module-classroom-styling"
                src="/classroom.jpg"
                alt="Young children sitting on a run in a classroom"
                width={512}
                height={340}
              />
            </div>
            <div
              className={`layout-flex layout-justify-content-center layout-flex-direction-column module-margin-classroom ${styles["layout-teacher-text"]}}`}
            >
              <h2
                className={`state-text-bold ${styles["module-h2-margin-bottom"]}`}
              >
                Teacher responsibilities increase every year.
              </h2>
              <p>
                Stay up-to-date with the latest salaries to ensure you are being
                fairly compensated.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="module-section-spacing">
        <div className="layout-container">
          <div className="layout-flex layout-space-between module-display-block">
            <div
              className={`layout-flex layout-justify-content-center layout-flex-direction-column ${styles["layout-teacher-text"]} ${styles["module-new-school-district-margin"]}`}
            >
              <h2
                className={`state-text-bold ${styles["module-h2-margin-bottom"]}`}
              >
                Looking to teach in <br />a new school district?
              </h2>
              <p>Select a metro area to find new hire teacher salaries.</p>
            </div>
            <div
              className={`layout-flex ${styles["layout-skyline-container"]} module-gap`}
            >
              <Link href="/metro/austin">
                <a>
                  <div
                    className={`layout-flex layout-justify-content-center layout-align-items-center ${styles["module-skyline-container"]} ${styles["module-skyline-container1-bg-color"]} ${styles["state-metro-containers"]}`}
                  >
                    <Image
                      className={`${styles["state-metro-logos"]}`}
                      src="/austin-skyline.png"
                      alt="City of Austin Skyline"
                      width={144}
                      height={50}
                    />
                  </div>
                </a>
              </Link>
              <Link href="/metro/dallas">
                <a>
                  <div
                    className={`layout-flex layout-justify-content-center layout-align-items-center ${styles["module-skyline-container"]} ${styles["module-skyline-container2-bg-color"]} ${styles["state-metro-containers"]}`}
                  >
                    <Image
                      className={`${styles["state-metro-logos"]}`}
                      src="/dallas-skyline.png"
                      alt="City of Dallas Skyline"
                      width={130}
                      height={130}
                    />
                  </div>
                </a>
              </Link>
              <Link href="/metro/houston">
                <a>
                  <div
                    className={`layout-flex layout-justify-content-center layout-align-items-center ${styles["module-skyline-container"]} ${styles["module-skyline-container3-bg-color"]} ${styles["state-metro-containers"]}`}
                  >
                    <Image
                      className={`${styles["state-metro-logos"]}`}
                      src="/houston-skyline.png"
                      alt="City of Houston Skyline"
                      width={130}
                      height={130}
                    />
                  </div>
                </a>
              </Link>
              <Link href="/metro/san-antonio">
                <a>
                  <div
                    className={`layout-flex layout-justify-content-center layout-align-items-center ${styles["module-skyline-container"]} ${styles["module-skyline-container4-bg-color"]} ${styles["state-metro-containers"]}`}
                  >
                    <Image
                      className={`${styles["state-metro-logos"]}`}
                      src="/san-antonio-skyline.png"
                      alt="City of San Antonio Skyline"
                      width={144}
                      height={50}
                    />
                  </div>
                </a>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
