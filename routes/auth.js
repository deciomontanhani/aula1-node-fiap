const express = require("express");

const Auth = require("../controller/Auth");
const authController = new Auth();
const router = express.Router();

router.post("/", authController.validate);

module.exports = router;
