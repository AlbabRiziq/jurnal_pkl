import express from "express";
import mongoose from "mongoose";
import User from "../model/user.js";

User;
mongoose.connect("mongodb://127.0.0.1:27017/jurnalpkl");

const SignUp = async (req, res) => {
  const username = req.query.username;
  const password = req.query.password;

  const hasil = await User.create({
    username: username,
    password: password,
  });

  return hasil;
};
export default SignUp;
