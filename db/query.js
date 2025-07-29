const pool = require("./pool");

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
  registerUser,
};
