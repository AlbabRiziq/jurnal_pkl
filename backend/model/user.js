import mongoose from "mongoose";
import bcrypt from "bcrypt";

const UserScheme = new mongoose.Schema({
  username: String,
  password: String,
  nama: String,
  nis: String,
  kelas: String,
  nisn: String,
  koordinat_pkl: String,
  tempat_pkl: String,
  token_pkl: String,
  journal_id: String,
});

UserScheme.pre("save", async function (next) {
  const salt = await bcrypt.genSalt();

  this.password = await bcrypt.hash(this.password, salt);

  next();
});

const User = mongoose.model("User", UserScheme);

export default User;
