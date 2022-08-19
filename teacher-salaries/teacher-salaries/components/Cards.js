import Link from "next/link";
import Image from "next/image";
import cardStyles from "../styles/Cards.module.css";

const Cards = (props) => {
  //console.log(props.districtData);
  const districts = props.districtData.metro_data;

  const metroName = props.districtData.metro;
  // If metro name is more than one word, it contains a hypen. This function removes the hypen and capitalizes the first letter of each word and then returns said words without the hypen.
  // If the metro name is one word, then just capitalizes the first letter of the word.
  const capMetroName = () => {
    const shallowCopyName = metroName.slice();
    let capitalizedMetroName;
    if (metroName.includes("-")) {
      const splitMetroName = shallowCopyName.split("-");
      const firstLetterCap = splitMetroName.map(
        (word) => word[0].toUpperCase() + word.slice(1)
      );
      capitalizedMetroName = firstLetterCap.join(" ");

      return capitalizedMetroName;
    } else {
      capitalizedMetroName =
        shallowCopyName.charAt(0).toUpperCase() + metroName.slice(1);
      return capitalizedMetroName;
    }
  };

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
        {capMetroName()} Metro
      </h1>
      <div className="layout-grid">{individualDistrict}</div>
    </div>
  );
};

export default Cards;
