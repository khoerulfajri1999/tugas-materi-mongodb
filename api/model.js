const mongoose = require("mongoose");

const produk = new mongoose.Schema(
  {
    nama: {
      type: String,
      required: true,
      unique: true,
    },
    is_active: {
      type: Boolean,
      required: true,
    },
    deskripsi: {
      type: String,
      required: false,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("produk", produk);
