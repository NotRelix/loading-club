const { body } = require("express-validator");
const { getUser } = require("../db/query");

const emptyErr = "must not be empty";
const alphaErr = "must only contain letters";
const lengthErr = "must be between 1 and 10 characters";
const usernameLengthErr = "must be between 1 and 16 characters";
const passwordLengthErr = "must have at least 8 characters";
const alreadyExistsErr = "already exists";

const registerValidation = [
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
    .custom(async (username) => {
      const userExists = await getUser(username);
      if (userExists.length > 0) {
        throw new Error(`Username ${alreadyExistsErr}`);
      }
    })
    .bail()
    .isAlpha()
    .withMessage(`Username ${alphaErr}`)
    .bail()
    .isLength({ min: 1, max: 16 })
    .withMessage(`Username ${usernameLengthErr}`),
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

module.exports = {
  registerValidation,
};
