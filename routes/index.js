const express = require("express");
const fcmRoute = require("./fcm.route");
const tokenRoute = require("./token.route");

const router = express.Router();

router.use("/token", tokenRoute);
router.use("/fcm", fcmRoute);

module.exports = router;