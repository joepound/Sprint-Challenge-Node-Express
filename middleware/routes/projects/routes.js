const express = require("express");
const router = express.Router();

const projectDB = require("./model");
const actionDB = require("../actions/model");

const errors = require("./errors");

router.get("/:id/actions", (req, res) => {
  const { id } = req.params;

  console.log(`Attempting to GET actions from project with ID [${id}]...`);

  projectDB
    .getProjectActions(id)
    .then(actions =>
      res.status(200).json({
        success: true,
        actions
      })
    )
    .catch(err => {
      const code = 500;
      res.status(code).json({
        success: false,
        code,
        errorInfo: errors.GET_PROJECT_ACTIONS_FAILURE
      });
    })
    .finally(
      console.log(`GET attempt for actions in project ID [${id}] finished.`)
    );
});

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

router.delete("/:id", (req, res) => {
  const { id } = req.params;

  console.log(`\nAttempting to DELETE project ID [${id}]...`);

  console.log("Checking if specified project exists...");
  projectDB
    .get(id)
    .then(project => {
      console.log(`Proceeding to delete project ID [${id}]...`);
      projectDB
        .remove(id)
        .then(deletionCount => {
          if (deletionCount === 1) {
            res.status(200).json({
              success: true,
              project
            });
          } else {
            const code = 500;
            res.status(code).json({
              success: false,
              code,
              errorInfo: deletionCount
                ? errors.DELETE_PROJECT_MULTIPLE_DELETED_ENTRIES
                : errors.DELETE_PROJECT_NO_DELETED_ENTRIES
            });
          }
        })
        .catch(err => {
          const code = 500;
          res.status(code).json({
            success: false,
            code,
            errorInfo: errors.DELETE_PROJECT_FAILURE
          });
        });
    })
    .catch(err => {
      const code = 500;
      res.status(code).json({
        success: false,
        code,
        errorInfo: errors.DELETE_PROJECT_EXISTENCE_CHECK_FAILURE
      });
    })
    .finally(console.log(`DELETE attempt for project ID [${id}] finished.`));
});

router.put("/:id", (req, res) => {
  const { id } = req.params;

  console.log(
    `\nAttempting to PUT information updates for project ID [${id}]...`
  );

  const projectChanges = req.body;

  console.log("Checking if any valid changes were supplied...");
  if (
    projectChanges.name ||
    projectChanges.description ||
    projectChanges.completed !== undefined
  ) {
    projectDB
      .update(id, projectChanges)
      .then(project => {
        if (project) {
          res.status(200).json({
            success: true,
            project
          });
        } else {
          const code = 404;
          res.status(code).json({
            success: false,
            code,
            errorInfo: errors.PUT_PROJECT_NOT_FOUND
          });
        }
      })
      .catch(err => {
        const code = 500;
        res.status(code).json({
          success: false,
          code,
          errorInfo: errors.PUT_PROJECT_FAILURE
        });
      })
      .finally(console.log(`PUT attempt for project ID [${id}] finished.`));
  } else {
    const code = 400;
    res.status(code).json({
      success: false,
      code,
      errorInfo: errors.PUT_PROJECT_NO_VALID_CHANGES
    });
    console.log(`PUT attempt for project ID [${id}] finished.`);
  }
});

module.exports = router;
