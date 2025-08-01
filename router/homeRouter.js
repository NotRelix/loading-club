const { Router } = require("express");
const homeRouter = Router();
const homeController = require("../controllers/homeController");
const registerRouter = require("./registerRouter");
const loginRouter = require("./loginRouter");
const logoutRouter = require("./logoutRouter");
const messageRouter = require("./messageRouter");
const memberRouter = require("./memberRouter");

homeRouter.get("/", homeController.homeMessagesGet);
homeRouter.use("/register", registerRouter);
homeRouter.use("/login", loginRouter);
homeRouter.use("/logout", logoutRouter);
homeRouter.use("/message", messageRouter);
homeRouter.use("/member", memberRouter);

module.exports = homeRouter;
