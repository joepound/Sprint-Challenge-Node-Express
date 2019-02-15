import React, { useContext, useEffect } from "react";
import { NavLink } from "react-router-dom";

import { DataContext } from "../providers/DataProvider";

function ProjectPage(props) {
  document.title = "View Project - Node Projects sprint app";

  const { selectedProject, getSelectedProject } = useContext(DataContext);

  useEffect(() => {
    getSelectedProject(props.match.params.id);
  }, []);

  return (
    <>
      <NavLink to="/">Back to All Projects</NavLink>
      {selectedProject ? (
        <>
          <h1>{selectedProject.name}</h1>
          <div>Description: {selectedProject.description}</div>
          <div>
            Actions:&nbsp;
            {selectedProject.actions.length ? (
              <ul>
                {selectedProject.actions.map(action => (
                  <li key={action.id}>
                    {action.description} -> {action.notes}
                  </li>
                ))}
              </ul>
            ) : (
              "[none]"
            )}
          </div>
          <div>
            Status: {selectedProject.completed ? "Complete" : "Not Complete"}
          </div>
        </>
      ) : (
        <h2>Nothing to see here....</h2>
      )}
    </>
  );
}

export default ProjectPage;
