import Link from "next/link";
import Image from "next/image";
import cardStyles from "../styles/Cards.module.css";

const Cards = (props) => {
  const districts = props.districtData.metro_data;

  const metroName = props.districtData.metro;
  const capitalizeMetroName =
    metroName.charAt(0).toUpperCase() + metroName.slice(1);

  const individualDistrict = districts.map((district) => {
    return (
      <div>
        <Link href={`/metro/${metroName}/district/${district.district_name}`}>
          <a>
            <div className="layout-district-card">
              <div className="layout-flex layout-justify-content-center layout-align-items-center layout-district-box">
                <div
                  className={`${cardStyles["module-district-content"]} module-text-align-center`}
                >
                  <Image
                    src={district.logo}
                    alt={`${district.abbreviated_name} logo`}
                    width={120}
                    height={120}
                  />
                  <div>
                    <h4>{district.abbreviated_name}</h4>
                  </div>
                  <div>
                    <button
                      className={cardStyles[`module-${metroName}-shadow-box`]}
                    >
                      Learn more
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </a>
        </Link>
      </div>
    );
  });

  return (
    <div>
      <h1 className="module-h1-metro module-text-align-center">
        {capitalizeMetroName} Metro
      </h1>
      <div className="layout-grid">{individualDistrict}</div>
    </div>
  );
};

export default Cards;
