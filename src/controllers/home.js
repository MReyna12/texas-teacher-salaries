//const path = require("path");
const teacherSalaryService = require("../services/teacher-salary-service");

module.exports = {
  getIndex: async (req, res) => {
    try {
      await res.render("index.ejs");
    } catch (error) {
      console.log(error);
    }
  },
  getAustin: async (req, res) => {
    console.log(req);
    try {
      await res.render("austin.ejs");
    } catch (error) {
      console.log(error);
    }
  },
  getDallas: async (req, res) => {
    try {
      await res.render("dallas.ejs");
    } catch (error) {
      console.log(error);
    }
  },
  getHouston: async (req, res) => {
    try {
      await res.render("houston.ejs");
    } catch (error) {
      console.log(error);
    }
  },
  getSanAntonio: async (req, res) => {
    try {
      await res.render("san-antonio.ejs");
    } catch (error) {
      console.log(error);
    }
  },
};
