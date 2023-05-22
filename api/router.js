const express = require("express");
const router = express();
const {
  getAllData,
  createData,
  getById,
  deleteData,
  updateData,
} = require("./controller");

router.get("/produk", getAllData);
router.post("/produk", createData);
router.get("/produk/:id", getById);
router.delete("/produk/:id", deleteData);
router.put("/produk/:id", updateData);

module.exports = router;
