exports.loginUserGet = (req, res) => {
  res.render("login", {
    title: "Login",
    user: {},
  });
};
