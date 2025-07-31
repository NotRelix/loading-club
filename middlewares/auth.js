const setUserToLocals = (req, res, next) => {
  res.locals.user = req.user;
  next();
};

const redirectIfAuthenticated = (req, res, next) => {
  if (req.isAuthenticated()) {
    return res.redirect("/");
  }
  next();
};

module.exports = { redirectIfAuthenticated, setUserToLocals };
