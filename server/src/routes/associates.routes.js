const { Router } = require("express");

const AssociatesController = require("../controllers/AssociatesController")

const associatesRoutes = Router();

const associatesController = new AssociatesController();

associatesRoutes.post("/", associatesController.create);

module.exports = associatesRoutes;