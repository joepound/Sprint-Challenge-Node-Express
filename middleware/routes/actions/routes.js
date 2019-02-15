const express = require("express");
const router = express.Router();

const actionDB = require("./model");

const errors = require("./errors");

router.get("/:id", (req, res) => {
  const { id } = req.params;

  console.log(`\nAttempting to GET actions with ID [${id}]...`);
  actionDB
    .get(id)
    .then(action => {
      res.status(200).json({
        success: true,
        action
      });
    })
    .catch(err => {
      const code = 500;
      res.status(code).json({
        success: false,
        code,
        errorInfo: errors.GET_INDIVIDUAL_ACTION_FAILURE
      });
    })
    .finally(console.log(`GET attempt for action ID [${id}] finished.`));
});

router.get("/", (req, res) => {
  console.log("\nAttempting to GET all actions...");
  actionDB
    .get()
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
        errorInfo: errors.GET_ALL_ACTIONS_FAILURE
      });
    })
    .finally(console.log("GET all actions attempt finished."));
});

router.post("/", (req, res) => {
  console.log("\nAttempting to POST new action...");

  const newAction = req.body;

  console.log("Checking if required fields were supplied and have valid values...");
  if (!newAction.project_id) {
    const code = 400;
    res.status(code).json({
      success: false,
      code,
      errorInfo: errors.POST_ACTION_NO_ASSOCIATED_PROJECT
    });
    console.log("Action POST attempt finished.");
  } else if (!newAction.description) {
    const code = 400;
    res.status(code).json({
      success: false,
      code,
      errorInfo: errors.POST_ACTION_NO_DESCRIPTION
    });
    console.log("Action POST attempt finished.");
  } else if (newAction.description.length > 128) {
    const code = 400;
    res.status(code).json({
      success: false,
      code,
      errorInfo: errors.POST_ACTION_DESCRIPTION_TOO_LONG
    });
    console.log("Action POST attempt finished.");
  } else if (!newAction.notes) {
    const code = 400;
    res.status(code).json({
      success: false,
      code,
      errorInfo: errors.POST_ACTION_NO_NOTES
    });
    console.log("Action POST attempt finished.");
  } else {
    console.log("Proceeding to create action...");
    actionDB
      .insert(newAction)
      .then(action =>
        res.status(201).json({
          success: true,
          action
        })
      )
      .catch(err => {
        const code = 500;
        res.status(code).json({
          success: false,
          code,
          errorInfo: errors.POST_ACTION_FAILURE
        });
      })
      .finally(console.log("Action POST attempt finished."));
  } 
});

router.delete("/:id", (req, res) => {
  const { id } = req.params;

  console.log(`\nAttempting to DELETE action ID [${id}]...`);

  console.log("Checking if specified action exists...");
  actionDB
    .get(id)
    .then(action => {
      console.log(`Proceeding to delete action ID [${id}]...`);
      actionDB
        .remove(id)
        .then(deletionCount => {
          if (deletionCount === 1) {
            res.status(200).json({
              success: true,
              action
            });
          } else {
            const code = 500;
            res.status(code).json({
              success: false,
              code,
              errorInfo: deletionCount
                ? errors.DELETE_ACTION_MULTIPLE_DELETED_ENTRIES
                : errors.DELETE_ACTION_NO_DELETED_ENTRIES
            });
          }
        })
        .catch(err => {
          const code = 500;
          res.status(code).json({
            success: false,
            code,
            errorInfo: errors.DELETE_ACTION_FAILURE
          });
        });
    })
    .catch(err => {
      const code = 500;
      res.status(code).json({
        success: false,
        code,
        errorInfo: errors.DELETE_ACTION_EXISTENCE_CHECK_FAILURE
      });
    })
    .finally(console.log(`DELETE attempt for action ID [${id}] finished.`));
});

module.exports = router;