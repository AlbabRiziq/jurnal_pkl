import express from "express";
import "dotenv/config";
import User from "./model/user.js";
import mongoose from "mongoose";
import bcrypt from "bcrypt";

mongoose.connect("mongodb://127.0.0.1:27017/jurnalpkl");

const app = express();
let router = express.Router();
const PORT = process.env.PORT || 8080;

app.get("/user", async (req, res) => {
  const users = await User.find({});

  res.send(users);
});

app.post("/signup", async (req, res) => {
  const username = req.query.username;
  const password = req.query.password;

  const hasil = await User.find({ username: username });

  if (hasil.length > 0) {
    res.json({ message: "Username sudah ada" });
  } else {
    const hasil = await User.create({
      username: username,
      password: password,
    });

    res.status(200).json({ username: hasil.username });
  }
});

app.post("/login", async (req, res) => {
  const username = req.query.username;
  const password = req.query.password;

  const dataUser = await User.findOne({ username: username });
  const canLogin = await bcrypt.compare(password, dataUser.password);

  if (canLogin) {
    res.json({ username: dataUser.username });
  } else {
    res.status(400).send("NO");
  }
});

app.listen(PORT, () => {
  console.log(`Started on port ${PORT}`);
});
