
const  express = require ("express");
const indexMiddleware = require("./middleware/index.middleware");

const app = express();

indexMiddleware(app);

module.exports = app;