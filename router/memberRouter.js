const { Router } = require("express");
const memberRouter = Router();
const memberController = require("../controllers/memberController");
const { ensureAuthenticated } = require("../middlewares/auth");

memberRouter.get("/", ensureAuthenticated, memberController.memberGet);
memberRouter.post("/", ensureAuthenticated, memberController.memberPost);

module.exports = memberRouter;
