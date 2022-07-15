/*const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const MetroSchema = new Schema(
  {
    houston_metro: [
      {
        city: String,
        district_name: String,
        superintendent_name: String,
        superintendent_telephone: String,
        superintendent_email: String,
        superintendent_twitter_link: String,
        superintendent_twitter: String,
        board_of_education_telephone: String,
        board_of_education_email: String,
        board_of_education_trustees: String,
      },
    ],
  },
  { collection: "school-districts" }
);

const Metro = mongoose.model("Metro", MetroSchema);

const mongoStuff = async (req, res) => {
  //console.log(Object.keys(Metro.db.collections));
  try {
    const mongoInfo = await Metro.find();
    console.log(mongoInfo);
    //res.json(mongoInfo);
  } catch (err) {
    console.error(err);
  }
};
mongoStuff();
module.exports = Metro;*/
