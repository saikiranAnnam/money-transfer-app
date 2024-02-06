const express = require('express');
const rootRouter = express.Router();

const userRouter = require("./user");
const accountRouter = require("./account");

rootRouter.use("/user", userRouter.router);
rootRouter.use("/account", accountRouter.router);

module.exports = rootRouter;