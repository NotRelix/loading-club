const { registerUser } = require("../db/query");
const { validationResult } = require("express-validator");
const { registerValidation } = require("../middlewares/validation");
const bcrypt = require("bcryptjs");

exports.registerUserGet = (req, res) => {
  res.render("register", {
    title: "Register",
    userDetails: {},
  });
};

exports.registerUserPost = [
  registerValidation,
  async (req, res, next) => {
    try {
      const errors = validationResult(req);
      const { firstName, lastName, username, password } = req.body;

      if (!errors.isEmpty()) {
        return res.status(400).render("register", {
          title: "Register",
          errors: errors.array(),
          userDetails: req.body,
        });
      }

      const hashedPassword = await bcrypt.hash(password, 10);
      const { rows } = await registerUser(
        firstName,
        lastName,
        username,
        hashedPassword
      );
      const user = rows[0];
      req.login(user, (err) => {
        if (err) {
          return next(err);
        }
        return res.redirect("/");
      });
    } catch (err) {
      console.error(err);
      next(err);
    }
  },
];
