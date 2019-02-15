import React from "react";
import { Route } from "react-router-dom";

import { HomePage, ProjectPage } from "./views";

function App(props) {
  return (
    <div className="projects-app">
      <Route exact path="/" component={HomePage} />
      <Route path="/:id" render={props => <ProjectPage {...props} />} />
    </div>
  );
}

export default App;
