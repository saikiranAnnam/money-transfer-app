// user.js
const express = require("express");
const router = express.Router();
const UserController = require("../controllers/UserControllers"); 
const authMiddleware = require("../middlewares/userAuth");

router
  .post("/signup", UserController.signup)
  .post("/signin", UserController.signin)
  .put("/update", authMiddleware, UserController.update);

module.exports = { router };
