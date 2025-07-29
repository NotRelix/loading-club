const { registerUser } = require("../db/query");
const { validationResult } = require("express-validator");
const { registerValidation } = require("../middlewares/validation");

exports.registerUserGet = (req, res) => {
  res.render("register", {
    title: "Register",
    user: {},
  });
};

exports.registerUserPost = [
  registerValidation,
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).render("register", {
        title: "Register",
        errors: errors.array(),
        user: req.body,
      });
    }
    const user = req.body;
    await registerUser(user);
    res.redirect("/");
  },
];
