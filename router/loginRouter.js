const { Router } = require("express");
const loginRouter = Router();
const loginController = require("../controllers/loginController");
const { redirectIfAuthenticated } = require("../middlewares/auth");

loginRouter.get("/", redirectIfAuthenticated, loginController.loginUserGet);
loginRouter.post("/", loginController.loginUserPost);

module.exports = loginRouter;
