import Link from "next/link";
import capitalizeText from "../helpers/capEachFirstLetter";

const District = (props) => {
  const districtData = props.data.singleDistrictData[0];

  const city = capitalizeText(districtData.city);
  const districtName = capitalizeText(districtData.district_name);

  return (
    <aside className="module-district-info-spacing">
      <div>
        <div className="module-district-information layout-flex layout-flex-direction-column">
          <h6 className="state-text-bold">District Information</h6>
          <span className="module-line-height module-district-info-font-size">
            {districtName}
          </span>
          <span className="module-line-height module-margin-bottom module-district-info-font-size">
            {city}, Texas
          </span>
          <h6 className="state-text-bold">Superintendent</h6>
          <span className="module-line-height module-district-info-font-size">
            {districtData.superintendent_name}
          </span>
          {districtData.superintendent_email !== "N/A" && (
            <span className="module-line-height module-district-info-font-size">
              <Link href={`mailto:${districtData.superintendent_email}`}>
                <a className="state-links-hover">
                  {districtData.superintendent_email}
                </a>
              </Link>
            </span>
          )}
          {districtData.superintendent_telephone !== "N/A" && (
            <span className="module-line-height module-district-info-font-size">
              {districtData.superintendent_telephone}
            </span>
          )}
          {districtData.superintendent_twitter !== "N/A" && (
            <span className="module-line-height module-margin-bottom module-district-info-font-size">
              <Link href={`${districtData.superintendent_twitter_link}`}>
                <a className="state-links-hover">
                  {districtData.superintendent_twitter}
                </a>
              </Link>
            </span>
          )}
          <h6 className="state-text-bold">District Board</h6>
          {districtData.board_of_education_telephone !== "N/A" && (
            <span className="module-line-height module-district-info-font-size">
              {districtData.board_of_education_telephone}
            </span>
          )}
          {districtData.board_of_education_email !== "N/A" && (
            <span className="module-line-height module-district-info-font-size">
              <Link href={`mailto:${districtData.board_of_education_email}`}>
                <a className="state-links-hover">
                  {districtData.board_of_education_email}
                </a>
              </Link>
            </span>
          )}
          <span className="module-line-height module-district-info-font-size">
            <Link href={`${districtData.board_of_education_trustees}`}>
              <a className="state-links-hover">Board Members</a>
            </Link>
          </span>
        </div>
      </div>
    </aside>
  );
};

export default District;
