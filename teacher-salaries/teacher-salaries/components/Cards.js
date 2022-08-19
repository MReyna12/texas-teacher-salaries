import { nanoid } from "nanoid";
import cardStyles from "../styles/Cards.module.css";

const Cards = (props) => {
  const districts = props.districtData;

  const individualDistrict = districts.map((district) => {
    return (
      <div className="layout-card-grid">
        <div>
          <a href="/metro/austin_metro/district/austin independent school district">
            <div className="layout-district-card">
              <div className="layout-flex layout-justify-content-center layout-align-items-center layout-district-box">
                <div className="module-district-content module-text-align-center">
                  <img
                    className="module-district-logos"
                    src="/images/austin-metro/austin-isd.png"
                    alt="Austin ISD seal"
                  />
                  <div>
                    <h4 key={nanoid()}>{district.abbreviated_name}</h4>
                  </div>
                  <div>
                    <button key={nanoid()} className="module-austin-shadow-box">
                      Learn more
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </a>
        </div>
      </div>
    );
  });

  return <div>{individualDistrict}</div>;
};

export default Cards;
