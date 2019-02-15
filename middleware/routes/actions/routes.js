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

module.exports = router;
