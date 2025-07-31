const { addMember } = require("../db/query");

exports.memberGet = (req, res) => {
  res.render("member", {
    title: "Membership",
  });
};

exports.memberPost = async (req, res) => {
  const { membershipPass } = req.body;
  const id = req.user.id;

  if (membershipPass !== "loading") {
    return res.redirect("/member");
  }
  await addMember(id);
  res.redirect("/");
};
