import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, withRouter } from "react-router-dom";

import DataProvider from "./providers/DataProvider";
import App from "./App";

const AppWithRouter = withRouter(App);

ReactDOM.render(
  <DataProvider>
    <Router>
      <AppWithRouter />
    </Router>
  </DataProvider>,
  document.getElementById("root")
);
