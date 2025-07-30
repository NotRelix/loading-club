const pool = require("./pool");

async function getUser(username) {
  try {
    const result = await pool.query("SELECT * FROM users WHERE username = $1", [
      username,
    ]);
    return result.rows;
  } catch (err) {
    console.error("Get user failed: ", err);
    return [];
  }
}

async function registerUser(firstName, lastName, username, password) {
  try {
    await pool.query(
      "INSERT INTO users (first_name, last_name, username, password, admin) VALUES ($1, $2, $3, $4, $5)",
      [firstName, lastName, username, password, false]
    );
  } catch (err) {
    console.error("Register user failed: ", err);
  }
}

module.exports = {
  getUser,
  registerUser,
};
