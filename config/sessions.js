const session = require("express-session");
const pool = require("../db/pool");
const pgSession = require("connect-pg-simple")(session);
require("dotenv").config();

const sessionMiddleware = session({
  secret: process.env.SESSION_SECRET,
  resave: false,
  saveUninitialized: false,
  store: new pgSession({
    pool: pool,
    tableName: "session",
  }),
  cookie: {
    maxAge: 1000 * 60 * 60 * 24,
  },
});

module.exports = sessionMiddleware;
