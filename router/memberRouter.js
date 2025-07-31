const { Router } = require("express");
const memberRouter = Router();
const memberController = require("../controllers/memberController");

memberRouter.get("/", memberController.memberGet);
memberRouter.post("/", memberController.memberPost);

module.exports = memberRouter;
