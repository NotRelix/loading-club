exports.homeMessagesGet = (req, res) => {
  res.render("home", {
    title: "Loading Club",
    user: req.user,
  });
};
