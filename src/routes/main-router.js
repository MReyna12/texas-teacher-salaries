const express = require("express");
const router = express.Router();
const homeController = require("../controllers/home");
const districtController = require("../controllers/district");
const mongoController = require("../controllers/mongodata-controller");

router.get("/", homeController.getIndex);
router.get("/austin", homeController.getAustin);
router.get("/dallas", homeController.getDallas);
router.get("/houston", homeController.getHouston);
router.get("/san-antonio", homeController.getSanAntonio);
router.get(
  "/metro/:metroName/district/:districtName",
  districtController.getAustinDistrictSalary
);

//router.get("/mongotest", mongoController.mongoData);

module.exports = router;
