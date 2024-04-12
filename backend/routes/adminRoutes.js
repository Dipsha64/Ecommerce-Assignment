const express = require("express");
const router = express.Router();
const { adminLogin, createAdmin } = require("../controller/adminController");

router.post("/adminLogin",adminLogin);
router.post("/newAdmin",createAdmin);

module.exports = router;