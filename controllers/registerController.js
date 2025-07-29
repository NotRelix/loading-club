const { registerUser } = require("../db/query");
const { body, validationResult } = require("express-validator");

const emptyErr = "must not be empty";
const alphaErr = "must only contain letters";
const lengthErr = "must be between 1 and 10 characters";
const passwordLengthErr = "must have at least 8 characters";

const validateUser = [
  body("firstName")
    .trim()
    .notEmpty()
    .withMessage(`First name ${emptyErr}`)
    .bail()
    .isAlpha()
    .withMessage(`First name ${alphaErr}`)
    .bail()
    .isLength({ min: 1, max: 10 })
    .withMessage(`First name ${lengthErr}`),
  body("lastName")
    .trim()
    .notEmpty()
    .withMessage(`Last name ${emptyErr}`)
    .bail()
    .isAlpha()
    .withMessage(`Last name ${alphaErr}`)
    .bail()
    .isLength({ min: 1, max: 10 })
    .withMessage(`Last name ${lengthErr}`),
  body("username")
    .trim()
    .notEmpty()
    .withMessage(`Username ${emptyErr}`)
    .bail()
    .isAlpha()
    .withMessage(`Username ${alphaErr}`)
    .bail()
    .isLength({ min: 1, max: 10 })
    .withMessage(`Username ${lengthErr}`),
  body("password")
    .trim()
    .notEmpty()
    .withMessage(`Password ${emptyErr}`)
    .bail()
    .isLength({ min: 8 })
    .withMessage(`Password ${passwordLengthErr}`),
  body("confirmPassword")
    .trim()
    .notEmpty()
    .withMessage(`Confirm Password ${emptyErr}`)
    .bail()
    .isLength({ min: 8 })
    .withMessage(`Confirm Password ${passwordLengthErr}`)
    .bail()
    .custom((value, { req }) => {
      if (value !== req.body.password) {
        throw new Error("Passwords do not match");
      }
      return true;
    }),
];

exports.registerUserGet = (req, res) => {
  res.render("register", {
    title: "Register",
    user: {},
  });
};

exports.registerUserPost = [
  validateUser,
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
