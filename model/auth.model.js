const mongoose = require("mongoose");

const authSchema = mongoose.Schema({
  email: String,
  password: String,
});

const AuthModel = mongoose.model("auth", authSchema);

module.exports = { AuthModel };
