require("dotenv").config();

module.exports = {
  mongodbURL: process.env.DB_URL,
  JWT_SECRET: process.env.JWT_SECRET,
};
