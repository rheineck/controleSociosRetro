const { Router } = require("express");

const usersRoutes = require("./users.routes");
const associatesRoutes = require("./associates.routes")

const routes = Router();

routes.use("/users", usersRoutes);
routes.use("/associates", associatesRoutes);

module.exports = routes;