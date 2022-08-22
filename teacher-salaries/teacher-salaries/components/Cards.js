import Link from "next/link";
import Image from "next/image";
import capitalizedText from "../helpers/capEachFirstLetter";
import cardStyles from "../styles/Cards.module.css";

const Cards = (props) => {
  //console.log(props.districtData);
  const districts = props.districtData.metro_data;

  const metroName = capitalizedText(props.districtData.metro);

  const individualDistrict = districts.map((district) => {
    return (
      <div>
        <Link
          href={`/metro/${props.districtData.metro}/${district.district_name}`}
        >
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
                      className={
                        cardStyles[
                          `module-${props.districtData.metro}-shadow-box`
                        ]
                      }
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
        {metroName} Metro
      </h1>
      <div className="layout-grid">{individualDistrict}</div>
    </div>
  );
};

export default Cards;
