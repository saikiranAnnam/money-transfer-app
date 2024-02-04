// user.js
const express = require("express");
const router = express.Router();
const UserController = require("../controllers/UserControllers"); 

router
  .post("/signup", UserController.signup)
  .post("/signin", UserController.signin);

module.exports = { router};
