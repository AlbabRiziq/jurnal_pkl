import mongoose from "mongoose";

const JurnalScheme = new mongoose.Schema({
  uid: String,
  nis: String,
  tanggal: String,
  jam: String,
  judul: String,
  deskripsi: String,
  foto: String,
  komentar: Array,
});

const Jurnal = mongoose.model("Jurnal", JurnalScheme);
