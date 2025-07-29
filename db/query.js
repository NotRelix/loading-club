const pool = require("./pool");

async function registerUser(user) {
  try {
    await pool.query(
      "INSERT INTO users (first_name, last_name, username, password, admin) VALUES ($1, $2, $3, $4, $5)",
      [user.firstName, user.lastName, user.username, user.password, user.admin]
    );
  } catch (err) {
    console.error("Register user failed: ", err);
  }
}

module.exports = {
  registerUser,
};
