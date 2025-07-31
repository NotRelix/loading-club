const { validationResult } = require("express-validator");
const { loginValidation } = require("../middlewares/validation");
const passport = require("passport");

exports.loginUserGet = (req, res) => {
  res.render("login", {
    title: "Login",
    userDetails: {},
  });
};

exports.loginUserPost = [
  loginValidation,
  (req, res, next) => {
    try {
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return res.status(400).render("login", {
          title: "Login",
          errors: errors.array(),
          userDetails: req.body,
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
