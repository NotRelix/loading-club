const express = require("express");
const path = require("node:path");
const homeRouter = require("./router/homeRouter");
const passport = require("passport");
const sessionMiddleware = require("./config/sessions");
const { setUserToLocals } = require("./middlewares/auth");
require("dotenv").config();
require("./config/passport");

const app = express();

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.use(sessionMiddleware);
app.use(passport.session());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));
app.use(setUserToLocals);

app.use("/", homeRouter);

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Express listening on port ${PORT}`);
});
