module.exports = {
  GET_ALL_PROJECTS_FAILURE: {
    title: "Project GET (all): failure",
    description:
      "Could not retrieve project database information due to an internal server error."
  },

  GET_INDIVIDUAL_PROJECT_FAILURE: {
    title: "Project GET (individual): failure",
    description:
      "Could not retrieve information on the specified project due to an internal server error."
  },

  GET_PROJECT_ACTIONS_FAILURE: {
    title: "Project actions GET: failure",
    description:
      "Could not retrieve actions in the specified project due to an internal server error."
  },

  POST_PROJECT_NO_NAME: {
    title: "Project POST: missing name",
    description: "No name was supplied for the new project.",
    recoveryInstructions: "Please supply a name and try again."
  },

  POST_PROJECT_NO_DESCRIPTION: {
    title: "Project POST: missing description",
    description: "No description was supplied for the new project.",
    recoveryInstructions: "Please supply a description and try again."
  },

  POST_PROJECT_FAILURE: {
    title: "Project POST: failure",
    description: "Could not create project due to an internal server error."
  },

  DELETE_PROJECT_EXISTENCE_CHECK_FAILURE: {
    title: "Project DELETE: could not check project information",
    description:
      "Could not check the project database due to an internal server error."
  },

  DELETE_PROJECT_NO_DELETED_ENTRIES: {
    title: "Project DELETE: no project entries deleted",
    description:
      "The specified project was found in the project database but could not be deleted due to an internal server error."
  },

  DELETE_PROJECT_MULTIPLE_DELETED_ENTRIES: {
    title: "Project DELETE: multiple project entries deleted",
    description:
      "Multiple project entries were deleted due to an internal server error. We are sorry for the inconvenience."
  },

  DELETE_PROJECT_FAILURE: {
    title: "Project DELETE: failure",
    description: "Could not delete project due to an internal server error."
  },

  PUT_PROJECT_NO_VALID_CHANGES: {
    title: "Project POST: no valid changes supplied",
    description: "No valid changes were supplied for the new project.",
    recoveryInstructions: "Please supply some valid changes and try again."
  },

  PUT_PROJECT_NOT_FOUND: {
    title: "Project PUT: project not found",
    description: "No project with the supplied ID exists",
    recoveryInstructions: "Please ensure that the correct project ID is supplied."
  },

  PUT_PROJECT_FAILURE: {
    title: "Project PUT: failure",
    description: "Could not update project due to an internal server error."
  },
};