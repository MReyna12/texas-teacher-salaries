//const path = require("path");

module.exports = {
  getIndex: async (req, res) => {
    try {
      await res.render("index.ejs");
    } catch (error) {
      console.log(error);
    }
  },
  getAustin: async (req, res) => {
    try {
      await res.render("austin.ejs");
    } catch (error) {
      console.log(error);
    }
  },
};
