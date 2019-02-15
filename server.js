/* Server imports */

const express = require("express");
const cors = require("cors");
const helmet = require("helmet");
const morgan = require("morgan");

const projectRoutes = require("./middleware/routes/projects/routes");
const actionRoutes = require("./middleware/routes/actions/routes");
const rootRoute = require("./middleware/routes/root");

const errorHandler = require("./middleware/errorHandler");

// server setup
const server = express();

// built-in middleware
server.use(express.json());

// third party middleware
server.use(cors());
server.use(helmet());
server.use(morgan("dev"));

// custom routing middleware
server.use("/api/projects", projectRoutes);
server.use("/api/actions", actionRoutes);
server.use("/", rootRoute);

// custom error-handling middleware
server.use(errorHandler);

module.exports = server;
