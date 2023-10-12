const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  nom: String,
  email: String,
  age: Number,
});

const UserModel = mongoose.model("users", UserSchema);
module.exports = UserModel;
