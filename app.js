const express = require("express");
const path = require("node:path");
const homeRouter = require("./router/homeRouter");
const session = require("express-session");
const passport = require("passport");
const pool = require("./db/pool");
const pgSession = require("connect-pg-simple")(session);
require("dotenv").config();
require("./config/passport");

const app = express();

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.use(
  session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: false,
    pool: pool,
    store: new pgSession({
      pool: pool,
      tableName: "session",
    }),
    cookie: {
      maxAge: 1000 * 60 * 60 * 24,
    },
  })
);
app.use(passport.session());
app.use(express.urlencoded({ extended: true }));

app.use("/", homeRouter);

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Express listening on port ${PORT}`);
});
