import express from "express";
import mongoose from "mongoose";
import User from "../model/user.js";

const router = express.Router();

mongoose.connect("mongodb://127.0.0.1:27017/jurnalpkl");

const signup = async (req, res, next) => {
  const username = req.query.username;
  const password = req.query.password;

  const hasil = await User.find({ username: username });

  if (hasil.length > 0) {
    res.status(400).json({ message: "Username sudah ada" });
  } else {
    const hasil = await User.create({
      username: username,
      password: password,
    });

    res.status(200).json({ username: hasil.username });
  }
};

export default signup;
