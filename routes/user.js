const express = require("express");
const user = require("../models/userModel");
const { login, signup } = require("../controllers/userController");

const router = express.Router();

router.post("/signup", login).post("/login", signup);

module.exports = router;
