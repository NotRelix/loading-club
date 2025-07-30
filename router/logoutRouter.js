const Router = require("express");
const logoutRouter = Router();
const logoutController = require("../controllers/logoutController");

logoutRouter.get("/", logoutController.logoutUserGet);

module.exports = logoutRouter;
