const { getAllMessages } = require("../db/query");

exports.homeMessagesGet = async (req, res) => {
  const result = await getAllMessages();
  res.render("home", {
    title: "Loading Club",
    messages: result.rows,
  });
};
