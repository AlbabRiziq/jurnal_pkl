import mongoose from "mongoose";

mongoose.connect("mongodb://127.0.0.1:27017/jurnalpkl", {});

const User = mongoose.model("User", {
  username: String,
  password: String,
  nama: String,
  nis: String,
  kelas: String,
  nisn: String,
  koordinat_pkl: String,
  tempat_pkl: String,
  token_pkl: String,
});

const User1 = new User({
  username: "admin",
  password: "admin",
  nama: "admin",
  nis: "admin",
  kelas: "admin",
  nisn: "admin",
  koordinat_pkl: "admin",
  tempat_pkl: "admin",
  token_pkl: "admin",
});

User1.save().then((res) => {
  console.log(res);
});
