import express from "express";
import "dotenv/config";
import User from "./model/user.js";
import mongoose from "mongoose";

// ROUTE
import login from "./Auth/login.js";
import signup from "./Auth/signup.js";
import adminsignup from "./Auth/adminsignup.js";

mongoose.connect(process.env.MONGO_URI);

const app = express();
const PORT = process.env.PORT || 8080;
const router = express.Router();

app.use("/", router);

// DEKLARASI ROUTE
router.post("/login", login);
router.post("/signup", signup);
router.post("/adminsignup", adminsignup);

app.listen(PORT, () => {
  console.log(`Started on port ${PORT}`);
});
