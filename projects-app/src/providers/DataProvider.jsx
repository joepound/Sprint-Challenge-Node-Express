import React, { createContext, useState } from "react";
import axios from "axios";

export const DataContext = createContext();

function DataProvider(props) {
  const [projects, setProjects] = useState(null);
  const [selectedProject, setSelectedProject] = useState(null);
  const [error, setError] = useState(null);

  const baseURL = "https://joepound-ls-sprint-projectsapp.herokuapp.com/api";

  const dataContext = {
    projects,
    selectedProject,
    error,

    async getProjects() {
      console.log("Attempting to retrieve project names...");
      try {
        const res = await axios.get(`${baseURL}/projects`);
        setProjects(res.data.projects);
      } catch (err) {
        setError(err);
        console.log(err)
      } finally {
        console.log("Finished attempt to retrieve project names...");
      }
    },

    async getSelectedProject(id) {
      console.log(`Attempting to retrieve project ID [${id}] details...`);
      try {
        const res = await axios.get(`${baseURL}/projects/${id}`);
        setSelectedProject(res.data.project);
      } catch (err) {
        setError(err);
      } finally {
        console.log(`Finished attempt to retrieve project ID [${id}] details.`);
      }
    },

    leaveErrorPage() {
      setError(null);
    }
  };

  return (
    <DataContext.Provider value={dataContext}>
      {props.children}
    </DataContext.Provider>
  );
}

export default DataProvider;
