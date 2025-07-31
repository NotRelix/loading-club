const { Router } = require("express");
const messageRouter = Router();
const messageController = require("../controllers/messageController");
const { ensureAuthenticated } = require("../middlewares/auth");

messageRouter.get("/add", ensureAuthenticated, messageController.messageAddGet);
messageRouter.post(
  "/add",
  ensureAuthenticated,
  messageController.messageAddPost
);

module.exports = messageRouter;
