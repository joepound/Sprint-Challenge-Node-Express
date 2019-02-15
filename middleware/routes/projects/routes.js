const express = require("express");
const router = express.Router();

const projectDB = require("./model");
const actionDB = require("../actions/model");

const errors = require("./errors");

router.get("/", (req, res) => {
  console.log("\nAttempting to GET all projects...");
  projectDB
    .get()
    .then(projects => res.status(200).json({
      success: true,
      projects
    }))
    .catch(err => {
      const code = 500;
      res.status(code).json({
        success: false,
        code,
        errorInfo: errors.GET_ALL_PROJECTS_FAILURE
      });
    })
    .finally(console.log("GET all projects attempt finished."));
});

module.exports = router;
