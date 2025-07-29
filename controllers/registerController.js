const { registerUser } = require("../db/query");

exports.registerUserGet = (req, res) => {
  res.render("register", {
    title: "Register",
  });
};

exports.registerUserPost = async (req, res) => {
  const user = req.body;
  await registerUser(user);
  console.log(user);
}
