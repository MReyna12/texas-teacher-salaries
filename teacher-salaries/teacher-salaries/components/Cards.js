import { nanoid } from "nanoid";
import Link from "next/link";
import Image from "next/image";
import capitalizedText from "../helpers/capEachFirstLetter";
import cardStyles from "../styles/Cards.module.css";

const Cards = (props) => {
  const districts = props.districtData;

  const metroName = capitalizedText(props.metroArea);

  const individualDistrict = districts.map((district) => {
    return (
      <div key={nanoid()}>
        <Link href={`/metro/${props.metroArea}/${district.districtName}`}>
          <a>
            <div className="layout-district-card">
              <div className="layout-flex layout-justify-content-center layout-align-items-center layout-district-box">
                <div
                  className={`${cardStyles["module-district-content"]} module-text-align-center`}
                >
                  <Image
                    src={district.logoUrl}
                    alt={`${district.abbreviatedName} logo`}
                    width={120}
                    height={120}
                  />
                  <div>
                    <h4>{district.abbreviatedName}</h4>
                  </div>
                  <div>
                    <button
                      className={
                        cardStyles[`module-${props.metroArea}-shadow-box`]
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
