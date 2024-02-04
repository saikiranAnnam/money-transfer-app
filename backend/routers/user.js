// user.js
const express = require("express");
const router = express.Router();
const UserSignUp = require("../controllers/UserControllers"); 

router
.post("/signup", UserSignUp);

module.exports = { router};
