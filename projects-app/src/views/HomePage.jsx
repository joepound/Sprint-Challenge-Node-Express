import React, { useContext, useEffect } from "react";
import { NavLink } from "react-router-dom";

import { DataContext } from "../providers/DataProvider";

function HomePage(props) {
  document.title = "Home - Node Projects sprint app";
  
  const { projects, getProjects, getSelectedProject } = useContext(DataContext);

  useEffect(() => {
    getProjects();
  }, []);

  return (
    <>
      <NavLink to="/">Back to All Projects</NavLink>
      <h1>Project Listing:</h1>
      {projects ? (
        projects.map((project, i) => (
          <div key={i}>
            <NavLink
              to={`/${project.id}`}
              onClick={e => getSelectedProject(project.id)}
            >
              {project.name}
            </NavLink>
          </div>
        ))
      ) : (
        <h2>Currently no projects to display....</h2>
      )}
    </>
  );
}

export default HomePage;
