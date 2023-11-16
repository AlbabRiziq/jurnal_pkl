import express from "express";
import mongoose from "mongoose";
import Admin from "../model/admin.js";
import generateUniqueId from "generate-unique-id";

const router = express.Router();

mongoose.connect("mongodb://127.0.0.1:27017/jurnalpkl");

const adminsignup = async (req, res, next) => {
  const kode_admin = generateUniqueId({
    length: 5,
  });
  const username = req.query.username;
  const password = req.query.password;

  const hasil = await Admin.find({ username: username });

  if (hasil.length > 0) {
    res.status(400).json({ message: "Username sudah ada" });
  } else {
    const hasil = await Admin.create({
      username: username,
      password: password,
      kode_admin: kode_admin,
    });

    res.status(200).json({ username: hasil.username });
  }
};

export default adminsignup;
