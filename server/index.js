const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const UserModel = require("./models/Users");

const app = express();
app.use(cors());
app.use(express.json());

mongoose.connect("mongodb://127.0.0.1:27017/crud");

app.get("./", (req, res) => {
  UserModel.find({})
    .then((users) => res.json(users))
    .catch((err) => res.json(err));
});

app.get("/getUser/:id", (req, res) => {
  const id = req.params.id;
  UserModel.findById({ _id: id })
    .then((users) => res.json(users))
    .catch((err) => res.json(err));
});

app.put("/updateUser/:id", (req, res) => {
  const id = req.params.id;
  UserModel.findByIdAndUpdate(
    id, // Use just the id for the filter query
    { nom: req.body.nom, email: req.body.email, age: req.body.age },
    { new: true } // To return the updated document
  )
    .then((user) => {
      if (user) {
        res.json(user); // Send the updated user
      } else {
        res.status(404).json({ message: "User not found" });
      }
    })
    .catch((err) => res.status(500).json({ message: "Internal server error" }));
});

app.delete("/deleteUser/:id", (req, res) => {
  const id = req.params.id;
  UserModel.findByIdAndDelete(id)
    .then((result) => {
      if (result) {
        res.json({ message: "User deleted successfully" });
      } else {
        res.status(404).json({ message: "User not found" });
      }
    })
    .catch((err) => res.status(500).json({ message: "Internal server error" }));
});

app.post("/createUser", (req, res) => {
  UserModel.create({
    name: req.body.name,
    email: req.body.email,
    age: req.body.age,
  })
    .then((user) => res.json(user))
    .catch((err) => res.json(err));
});
