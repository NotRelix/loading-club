const { registerUser, getUser } = require("../db/query");
const { validationResult } = require("express-validator");
const { registerValidation } = require("../middlewares/validation");
const bcrypt = require("bcryptjs");

exports.registerUserGet = (req, res) => {
  res.render("register", {
    title: "Register",
    user: {},
  });
};

exports.registerUserPost = [
  registerValidation,
  async (req, res, next) => {
    const errors = validationResult(req);
    try {
      const { firstName, lastName, username, password } = req.body;

      if (!errors.isEmpty()) {
        return res.status(400).render("register", {
          title: "Register",
          errors: errors.array(),
          user: req.body,
        });
      }

      const hashedPassword = await bcrypt.hash(password, 10);
      await registerUser(firstName, lastName, username, hashedPassword);
      res.redirect("/");
    } catch (err) {
      console.error(err);
      next(err);
    }
  },
];
