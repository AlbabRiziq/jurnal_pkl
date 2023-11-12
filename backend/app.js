import express from "express";
import "dotenv/config";
import User from "./model/user.js";
import mongoose from "mongoose";

// ROUTE
import login from "./Auth/login.js";
import signup from "./Auth/signup.js";

mongoose.connect("mongodb://127.0.0.1:27017/jurnalpkl");

const app = express();
const PORT = process.env.PORT || 8080;
const router = express.Router();

app.use("/", router);

// DEKLARASI ROUTE
router.post("/login", login);
router.post("/signup", signup);

app.listen(PORT, () => {
  console.log(`Started on port ${PORT}`);
});
