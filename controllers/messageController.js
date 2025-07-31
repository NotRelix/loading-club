const { addMessage } = require("../db/query");

exports.messageAddGet = (req, res) => {
  res.render("addMessage", {
    title: "Add Message",
  });
};

exports.messageAddPost = async (req, res) => {
  try {
    const { title, message } = req.body;
    const id = req.user.id;
    await addMessage(id, title, message);
    res.redirect("/");
  } catch (err) {
    console.error(err);
  }
};
