// UserController.js
const jwt = require("jsonwebtoken");
const User = require("../models/user");
const { JWT_SECRET } = require("../config/config");
const signupBody = require("../validators/userSignup");
const signinBody = require("../validators/userSignin");
const Account = require("../models/account");

const signup = async (req, res) => {
  try {
    // signup body validation
    const { success } = signupBody.safeParse(req.body);

    if (!success) {
      return res.status(411).json({
        message: "Incorrect inputs",
      });
    }

    // checking whether the user already exists or not
    const existingUser = await User.findOne({
      username: req.body.username,
    });

    if (existingUser) {
      return res.status(411).json({
        message: "User already exists!!",
      });
    }

    // user creation
    const user = await User.create({
      username: req.body.username,
      password: req.body.password,
      firstname: req.body.firstname,
      lastname: req.body.lastname,
    });

    const userId = user._id;

    // create new bank account for user
    await Account.create({
      userId,
      balance: 1 + Math.random() * 10000,
    });

    const token = jwt.sign(
      {
        userId,
      },
      JWT_SECRET
    );

    res.status(200).json({
      message: "User created successfully",
      token: token,
    });
  } catch (error) {
    console.error("Error during user signup:", error);
    res.status(500).json({
      error: "Internal Server Error",
    });
  }
};

const signin = async (req, res) => {
  const { success } = signinBody.safeParse(req.body);
  if (!success) {
    return res.status(411).json({
      message: "Incorrect inputs",
    });
  }

  const user = await User.findOne({
    username: req.body.username,
    password: req.body.password,
  });

  if (user) {
    const token = jwt.sign(
      {
        userId: user._id,
      },
      JWT_SECRET
    );

    res.json({
      token: token,
    });
    return;
  }

  res.status(411).json({
    message: "Error while logging in",
  });
};

module.exports = {
  signup,
  signin,
};
