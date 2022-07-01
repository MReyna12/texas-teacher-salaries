const express = require("express");
const homeController = require("../controllers/home");
const router = express.Router();

router.get("/", homeController.getIndex);
router.get("/austin", homeController.getAustin);

module.exports = router;
