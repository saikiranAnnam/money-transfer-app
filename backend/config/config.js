require("dotenv").config();

modules.exports = {
  mongodbURL: process.env.DB_URL,
  JWT_SECERT: "123456789",
};
