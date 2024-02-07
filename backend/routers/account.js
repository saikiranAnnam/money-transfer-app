const express = require("express");
const authMiddleware = require("../middlewares/userAuth");
const router = express.Router();
const AccountController = require("../controllers/AccountControllers");

router
  .get("/balance", authMiddleware, AccountController.getBalance)
  .post("/transfer", authMiddleware, AccountController.transferFund);

module.exports = { router };
