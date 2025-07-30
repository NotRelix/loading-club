const { validationResult } = require("express-validator");
const { loginValidation } = require("../middlewares/validation");
const passport = require("passport");

exports.loginUserGet = (req, res) => {
  res.render("login", {
    title: "Login",
    user: req.user,
  });
};

exports.loginUserPost = [
  loginValidation,
  (req, res, next) => {
    const errors = validationResult(req);
    try {
      if (!errors.isEmpty()) {
        return res.status(400).render("login", {
          title: "Login",
          errors: errors.array(),
          user: req.body,
        });
      }
      next();
    } catch (err) {
      console.error(err);
      next(err);
    }
  },
  passport.authenticate("local", {
    successRedirect: "/",
    failureRedirect: "/login",
  }),
];
