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
    const rows = await pool.query(
      "INSERT INTO users (first_name, last_name, username, password) VALUES ($1, $2, $3, $4) RETURNING id",
      [firstName, lastName, username, password]
    );
    return rows;
  } catch (err) {
    console.error("Register user failed: ", err);
  }
}

async function getAllMessages() {
  try {
    const rows = await pool.query(
      "SELECT * FROM messages ORDER BY created_at DESC"
    );
    return rows;
  } catch (err) {
    console.error("Get all messages failed: ", err);
  }
}

async function addMessage(id, title, message) {
  try {
    await pool.query(
      "INSERT INTO messages (user_id, title, message) VALUES ($1, $2, $3)",
      [id, title, message]
    );
  } catch (err) {
    console.error("Add message failed: ", err);
  }
}

async function addMember(id) {
  try {
    await pool.query("UPDATE users SET membership = true WHERE id = $1", [id]);
  } catch (err) {
    console.error("Add member failed: ", err);
  }
}

module.exports = {
  getUser,
  registerUser,
  getAllMessages,
  addMessage,
  addMember,
};
