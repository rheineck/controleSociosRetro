const { Router } = require("express");

const usersRoutes = require("./users.routes");
const associatesRoutes = require("./associates.routes");
const sessionsRouter = require('./sessions.routes');

const routes = Router();

routes.use("/users", usersRoutes);
routes.use("/associates", associatesRoutes);
routes.use("/sessions", sessionsRouter);

module.exports = routes;