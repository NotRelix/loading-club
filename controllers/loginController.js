const { validationResult } = require("express-validator");
const { loginValidation } = require("../middlewares/validation");

exports.loginUserGet = (req, res) => {
  res.render("login", {
    title: "Login",
    user: {},
  });
};

exports.loginUserPost = [
  loginValidation,
  async (req, res, next) => {
    const errors = validationResult(req);
    try {
      if (!errors.isEmpty()) {
        return res.status(400).render("login", {
          title: "Login",
          errors: errors.array(),
          user: req.body,
        });
      }
      res.redirect("/");
    } catch (err) {
      console.error(err);
      next(err);
    }
  },
];
