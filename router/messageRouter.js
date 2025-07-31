const { Router } = require("express");
const messageRouter = Router();
const messageController = require("../controllers/messageController");

messageRouter.get("/add", messageController.messageAddGet);

module.exports = messageRouter;
