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
};