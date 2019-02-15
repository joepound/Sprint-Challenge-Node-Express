const express = require("express");
const router = express.Router();

const projectDB = require("./model");
const actionDB = require("../actions/model");

const errors = require("./errors");

router.get("/:id", (req, res) => {
  const { id } = req.params;

  console.log(`\nAttempting to GET projects with ID [${id}]...`);
  projectDB
    .get(id)
    .then(project => {
      res.status(200).json({
        success: true,
        project
      });
    })
    .catch(err => {
      const code = 500;
      res.status(code).json({
        success: false,
        code,
        errorInfo: errors.GET_INDIVIDUAL_PROJECT_FAILURE
      });
    })
    .finally(console.log(`GET attempt for project ID [${id}] finished.`));
});

router.get("/", (req, res) => {
  console.log("\nAttempting to GET all projects...");
  projectDB
    .get()
    .then(projects =>
      res.status(200).json({
        success: true,
        projects
      })
    )
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

router.post("/", (req, res) => {
  console.log("\nAttempting to POST new project...");

  const newProject = req.body;
  
  console.log("Checking if required fields were supplied...");
  if (!newProject.name) {
    const code = 400;
    res.status(code).json({
      success: false,
      code,
      errorInfo: errors.POST_PROJECT_NO_NAME
    });
    console.log("Project POST attempt finished.");
  } else if (!newProject.description) {
    const code = 400;
    res.status(code).json({
      success: false,
      code,
      errorInfo: errors.POST_PROJECT_NO_DESCRIPTION
    });
    console.log("Project POST attempt finished.");
  } else {
    console.log("Proceeding to create project...");
    projectDB
      .insert(newProject)
      .then(project =>
        res.status(201).json({
          success: true,
          project
        })
      )
      .catch(err => {
        const code = 500;
        res.status(code).json({
          success: false,
          code,
          errorInfo: errors.POST_PROJECT_FAILURE
        });
      })
      .finally(console.log("Project POST attempt finished."));
  }
});

module.exports = router;
