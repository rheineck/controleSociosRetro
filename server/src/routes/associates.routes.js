const { Router } = require("express");

const AssociatesController = require("../controllers/AssociatesController");
const ensureAuthenticated = require("../middleware/ensureAuthenticated");

const associatesRoutes = Router();

const associatesController = new AssociatesController();

associatesRoutes.use(ensureAuthenticated);

associatesRoutes.post("/new", associatesController.create);

module.exports = associatesRoutes;