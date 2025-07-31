const { Router } = require("express");
const memberRouter = Router();
const memberController = require("../controllers/memberController");

memberRouter.get("/", memberController.memberGet);

module.exports = memberRouter;
