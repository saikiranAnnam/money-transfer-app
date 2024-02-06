const express = require("express");
const authMiddleware = require("../middlewares/userAuth");
const router = express.Router();
const AccountController = require("../controllers/AccountControllers");

router.get("/balance", authMiddleware, AccountController.getBalance);

module.exports = { router };
