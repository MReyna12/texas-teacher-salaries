import { nanoid } from "nanoid";

const Cards = (props) => {
  //console.log(props.districtData);

  const districts = props.districtData;

  const cities = districts.map((district) => {
    return <p key={nanoid()}>{district.city}</p>;
  });

  //createDistrictCard();

  return <div>{cities}</div>;
};

export default Cards;
