const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
  name: { type: String, required: true, default: "Dobien" },
  email: { type: String, required: true, default: "Dobien@gmail.com" },
  password: { type: String, required: true, defualt: "password" }
});

const User = mongoose.model("User", userSchema);

module.exports = User;