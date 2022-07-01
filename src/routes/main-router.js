const express = require("express");
const homeController = require("../controllers/home");
const router = express.Router();

router.get("/", homeController.getIndex);
router.get("/austin", homeController.getAustin);
router.get("/dallas", homeController.getDallas);
router.get("/houston", homeController.getHouston);
router.get("/san-antonio", homeController.getSanAntonio);

module.exports = router;
