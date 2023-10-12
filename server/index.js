const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const UserModel = require("./models/Users");

const app = express();
app.use(cors());
app.use(express.json());

mongoose.connect("mongodb://localhost:27017/crud");

app.post("/createUser", (req, res) => {
  UserModel.create(req.body.name)
    .then((users) => res.json(users))
    .catch((err) => res.json(err));
});

app.listen(3001, () => {
  console.log("Le serveur marche!");
});
