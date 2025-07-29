const Router = require("express");
const homeRouter = Router();
const homeController = require("../controllers/homeController");
const registerRouter = require("./registerRouter");

homeRouter.get("/", homeController.homeMessagesGet);
homeRouter.use("/register", registerRouter);

module.exports = homeRouter;