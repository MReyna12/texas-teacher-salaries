import Link from "next/link";

const District = (props) => {
  const districtData = props.data.singleDistrictData[0];

  return (
    <aside class="module-district-info-spacing">
      <div>
        <div class="module-district-information layout-flex layout-flex-direction-column">
          <h6 class="state-text-bold">District Information</h6>
          <span class="module-line-height module-district-info-font-size">
            {districtData.district_name}
          </span>
          <span class="module-line-height module-margin-bottom module-district-info-font-size">
            {districtData.city}, texas
          </span>
          <h6 class="state-text-bold">Superintendent</h6>
          <span class="module-line-height module-district-info-font-size">
            {districtData.superintendent_name}
          </span>
          {districtData.superintendent_email !== "N/A" && (
            <span class="module-line-height module-district-info-font-size">
              <Link href={`mailto:${districtData.superintendent_email}`}>
                <a class="state-links-hover">
                  {districtData.superintendent_email}
                </a>
              </Link>
            </span>
          )}
          {districtData.superintendent_telephone !== "N/A" && (
            <span class="module-line-height module-district-info-font-size">
              {districtData.superintendent_telephone}
            </span>
          )}
          {districtData.superintendent_twitter !== "N/A" && (
            <span class="module-line-height module-margin-bottom module-district-info-font-size">
              <Link href={`${districtData.superintendent_twitter_link}`}>
                <a class="state-links-hover">
                  {districtData.superintendent_twitter}
                </a>
              </Link>
            </span>
          )}
          <h6 class="state-text-bold">District Board</h6>
          {districtData.board_of_education_telephone !== "N/A" && (
            <span class="module-line-height module-district-info-font-size">
              {districtData.board_of_education_telephone}
            </span>
          )}
          {districtData.board_of_education_email !== "N/A" && (
            <span class="module-line-height module-district-info-font-size">
              <Link href={`mailto:${districtData.board_of_education_email}`}>
                <a class="state-links-hover">
                  {districtData.board_of_education_email}
                </a>
              </Link>
            </span>
          )}
          <span class="module-line-height module-district-info-font-size">
            <Link href={`${districtData.board_of_education_trustees}`}>
              <a class="state-links-hover">Board Members</a>
            </Link>
          </span>
        </div>
      </div>
    </aside>
  );
};

export default District;
