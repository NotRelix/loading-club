const { validationResult } = require("express-validator");
const { addMessage } = require("../db/query");
const { messageValidation } = require("../middlewares/validation");

exports.messageAddGet = (req, res) => {
  res.render("addMessage", {
    title: "Add Message",
    data: {},
  });
};

exports.messageAddPost = [
  messageValidation,
  async (req, res) => {
    const errors = validationResult(req);
    try {
      if (!errors.isEmpty()) {
        return res.status(400).render("addMessage", {
          title: "Add Message",
          errors: errors.array(),
          data: req.body,
        });
      }

      const { title, message } = req.body;
      const id = req.user.id;
      await addMessage(id, title, message);
      res.redirect("/");
    } catch (err) {
      console.error(err);
    }
  },
];
