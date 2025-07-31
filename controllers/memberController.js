const { validationResult } = require("express-validator");
const { addMember } = require("../db/query");
const { membershipValidation } = require("../middlewares/validation");

exports.memberGet = (req, res) => {
  res.render("member", {
    title: "Membership",
  });
};

exports.memberPost = [
  membershipValidation,
  async (req, res) => {
    try {
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return res.status(400).render("member", {
          title: "Membership",
          errors: errors.array(),
        });
      }
      const id = req.user.id;
      await addMember(id);
      res.redirect("/");
    } catch (err) {
      console.error(err);
    }
  },
];
