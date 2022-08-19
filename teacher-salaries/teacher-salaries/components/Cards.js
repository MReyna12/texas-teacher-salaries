import { nanoid } from "nanoid";
import Link from "next/link";
import Image from "next/image";
import cardStyles from "../styles/Cards.module.css";

const Cards = (props) => {
  console.log(props.districtData[0].logo);
  const districts = props.districtData;

  const individualDistrict = districts.map((district) => {
    return (
      <div>
        <Link href={`/austin/district/${district.district_name}`}>
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
                    <h4 key={nanoid()}>{district.abbreviated_name}</h4>
                  </div>
                  <div>
                    <button
                      key={nanoid()}
                      className={cardStyles["module-austin-shadow-box"]}
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

  return <div className="layout-grid">{individualDistrict}</div>;
};

export default Cards;
