const Router = require("express");
const loginRouter = Router();
const loginController = require("../controllers/loginController");

loginRouter.get("/", loginController.loginUserGet);

module.exports = loginRouter;
