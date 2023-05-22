const model = require("./model");

const getAllData = async (req, res) => {
  try {
    const result = await model.find().select("_id nama is_active deskripsi");
    res.status(200).json({ message: "succes get data", result });
  } catch (error) {
    console.log(error);
  }
};

const createData = async (req, res) => {
  try {
    const result = await model.create(req.body);
    res.status(201).json({ message: "succes create data", result });
  } catch (error) {
    res.json(error);
  }
};

const getById = async (req, res) => {
  const { id } = req.params;
  try {
    const result = await model
      .findById(id)
      .select("_id nama is_active deskripsi");

    if (!result) return res.status(404).json({ message: "id error" });

    res.status(200).json({ message: "succes get data", result });
  } catch (error) {
    res.status(400).json(error);
  }
};

const deleteData = async (req, res) => {
  const { id } = req.params;
  try {
    const result = await model.findByIdAndDelete(id);

    if (!result) return res.status(404).json({ message: "id error" });

    res.status(200).json({ message: "succes delete data", result });
  } catch (error) {
    res.status(400).json(error);
  }
};

const updateData = async (req, res) => {
  const { id } = req.params;
  try {
    const result = await model.findByIdAndUpdate(id, req.body);

    if (!result) return res.status(404).json({ message: "id error" });

    res.status(200).json({ message: "succes update data", result: req.body });
  } catch (error) {
    res.status(400).json(error);
  }
};
module.exports = { getAllData, createData, getById, deleteData, updateData };
