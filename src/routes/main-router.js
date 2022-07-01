const express = require("express");
const router = express.Router();
const homeController = require("../controllers/home");
const districtController = require("../controllers/district");

router.get("/", homeController.getIndex);
router.get("/austin", homeController.getAustin);
router.get("/dallas", homeController.getDallas);
router.get("/houston", homeController.getHouston);
router.get("/san-antonio", homeController.getSanAntonio);
router.get(
  "/metro/austin/district/:districtName",
  districtController.getAustinDistrictSalary
);

module.exports = router;
