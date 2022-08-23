import capitalizeText from "../helpers/capEachFirstLetter";

const District = (props) => {
  const districtData = props.data.data[0];

  const city = capitalizeText(districtData.city);
  const districtName = capitalizeText(districtData.districtName);

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
            {districtData.superintendentName}
          </span>
          {districtData.superintendentEmail !== "N/A" && (
            <span className="module-line-height module-district-info-font-size">
              <a
                href={`mailto:${districtData.superintendentEmail}`}
                className="state-links-hover"
              >
                {districtData.superintendentEmail}
              </a>
            </span>
          )}
          {districtData.superintendentTelephone !== "N/A" && (
            <span className="module-line-height module-district-info-font-size">
              {districtData.superintendentTelephone}
            </span>
          )}
          {districtData.superintendentTwitter !== "N/A" && (
            <span className="module-line-height module-margin-bottom module-district-info-font-size">
              <a
                href={`${districtData.superintendentTwitterUrl}`}
                className="state-links-hover"
              >
                {districtData.superintendentTwitter}
              </a>
            </span>
          )}
          <h6 className="state-text-bold">District Board</h6>
          {districtData.boardTelephone !== "N/A" && (
            <span className="module-line-height module-district-info-font-size">
              {districtData.boardTelephone}
            </span>
          )}
          {districtData.boardEmail !== "N/A" && (
            <span className="module-line-height module-district-info-font-size">
              <a
                href={`mailto:${districtData.boardEmail}`}
                className="state-links-hover"
              >
                {districtData.boardEmail}
              </a>
            </span>
          )}
          <span className="module-line-height module-district-info-font-size">
            <a
              href={`${districtData.boardTrustees}`}
              className="state-links-hover"
            >
              Board Members
            </a>
          </span>
        </div>
      </div>
    </aside>
  );
};

export default District;
