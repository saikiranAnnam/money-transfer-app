const express = require("express");
const router = express.Router();

router
  .get("/", async (req, res) => {
    res.json({ message: "hello wold" });
  })

  .get("/hellos", async (req, res) => {
    res.json("king");
  });

module.exports = router;
