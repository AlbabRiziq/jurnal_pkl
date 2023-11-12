import express from "express";
import mongoose from "mongoose";
import bcrypt from "bcrypt";
import User from "../model/user.js";

const router = express.Router();

mongoose.connect("mongodb://127.0.0.1:27017/jurnalpkl");

const login = async (req, res) => {
  const username = req.query.username;
  const password = req.query.password;

  const dataUser = await User.findOne({ username: username });
  const canLogin = await bcrypt.compare(password, dataUser.password);

  if (canLogin) {
    res.json({ username: dataUser.username });
  } else {
    res.status(400).send("NO");
  }
};

export default login;
