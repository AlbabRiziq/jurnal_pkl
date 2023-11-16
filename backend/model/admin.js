import mongoose from "mongoose";
import bcrypt from "bcrypt";

const AdminScheme = new mongoose.Schema({
  username: String,
  password: String,
  nama: String,
  nip: String,
  user: Array,
  kode_admin: String,
  tempat_pkl: Array,
});

AdminScheme.pre("save", async function (next) {
  const salt = await bcrypt.genSalt();

  this.password = await bcrypt.hash(this.password, salt);

  next();
});

const Admin = mongoose.model("Admin", AdminScheme);

export default Admin;
