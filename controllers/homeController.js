const { getAllMessages } = require("../db/query");
const { formatDate } = require("../public/js/formatDate");

exports.homeMessagesGet = async (req, res) => {
  const result = await getAllMessages();
  res.render("home", {
    title: "Loading Club",
    messages: result.rows,
    formatDate,
  });
};
