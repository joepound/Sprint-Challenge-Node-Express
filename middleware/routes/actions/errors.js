module.exports = {
  GET_ALL_ACTIONS_FAILURE: {
    title: "Action GET (all): failure",
    description:
      "Could not retrieve action database information due to an internal server error."
  },

  GET_INDIVIDUAL_ACTION_FAILURE: {
    title: "Action GET (individual): failure",
    description:
      "Could not retrieve information on the specified action due to an internal server error."
  },

  POST_ACTION_NO_ASSOCIATED_PROJECT: {
    title: "Action POST: missing associated project",
    description: "No id for an associated project was supplied for the new action.",
    recoveryInstructions: "Please supply a project ID and try again."
  },

  POST_ACTION_NO_DESCRIPTION: {
    title: "Action POST: missing description",
    description: "No description was supplied for the new action.",
    recoveryInstructions: "Please supply a description and try again."
  },

  POST_ACTION_DESCRIPTION_TOO_LONG: {
    title: "Action POST: description too long",
    description: "The supplied action description exceeded the 128-character limit.",
    recoveryInstructions: "Please supply a shorter description and try again."
  },

  POST_ACTION_NO_NOTES: {
    title: "Action POST: missing notes",
    description: "No notes were supplied for the new action.",
    recoveryInstructions: "Please supply some notes and try again."
  },

  POST_ACTION_FAILURE: {
    title: "Action POST: failure",
    description: "Could not create action due to an internal server error."
  },

  DELETE_ACTION_EXISTENCE_CHECK_FAILURE: {
    title: "Action DELETE: could not check action information",
    description:
      "Could not check the action database due to an internal server error."
  },

  DELETE_ACTION_NO_DELETED_ENTRIES: {
    title: "Action DELETE: no action entries deleted",
    description:
      "The specified action was found in the action database but could not be deleted due to an internal server error."
  },

  DELETE_ACTION_MULTIPLE_DELETED_ENTRIES: {
    title: "Action DELETE: multiple action entries deleted",
    description:
      "Multiple action entries were deleted due to an internal server error. We are sorry for the inconvenience."
  },

  DELETE_ACTION_FAILURE: {
    title: "Action DELETE: failure",
    description: "Could not delete action due to an internal server error."
  },

  PUT_ACTION_NO_VALID_CHANGES: {
    title: "Action POST: no valid changes supplied",
    description: "No valid changes were supplied for the new action.",
    recoveryInstructions: "Please supply some valid changes and try again."
  },

  PUT_ACTION_DESCRIPTION_TOO_LONG: {
    title: "Action PUT: description too long",
    description: "The supplied action description exceeded the 128-character limit.",
    recoveryInstructions: "Please supply a shorter description and try again."
  },

  PUT_ACTION_NOT_FOUND: {
    title: "Action PUT: action not found",
    description: "No action with the supplied ID exists",
    recoveryInstructions:
      "Please ensure that the correct action ID is supplied."
  },

  PUT_ACTION_FAILURE: {
    title: "Action PUT: failure",
    description: "Could not update action due to an internal server error."
  }
};
