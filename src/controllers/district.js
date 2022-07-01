const teacherSalaryService = require("../services/teacher-salary-service");

const getDistrictSalary = (req, res) => {
  const metro = req.params.metroName;
  const district = req.params.districtName;
  try {
    const districtInfo = teacherSalaryService.getDistrictSalary(
      metro,
      district
    );
    console.log(districtInfo);
    res.render("district.ejs", { districtInfo });
  } catch (error) {
    res
      .status(error?.status || 500)
      .send({ status: "FAILED", data: { error: error?.message || error } });
  }
};

module.exports = {
  getDistrictSalary,
};