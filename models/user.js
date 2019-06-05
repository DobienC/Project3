const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
  username: { type: String, required: true, default: "Dobien" },
  email: { type: String, required: true, default: "Dobien@gmail.com" },
  password: { type: String, required: true, defualt: "password" },
  characters: { type: [String] },
  favorites: { type: [String] }
});

const User = mongoose.model("User", userSchema);

module.exports = User;