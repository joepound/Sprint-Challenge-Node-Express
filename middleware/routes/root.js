const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.send(`
    <h1>Projects App</h1>
    <p>Welcome to the Projects App!</p>
  `)
});

module.exports = router;