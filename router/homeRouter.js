const Router = require("express");
const homeRouter = Router();
const homeController = require("../controllers/homeController");
const registerRouter = require("./registerRouter");
const loginRouter = require("./loginRouter");

homeRouter.get("/", homeController.homeMessagesGet);
homeRouter.use("/register", registerRouter);
homeRouter.use("/login", loginRouter);

module.exports = homeRouter;
