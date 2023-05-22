const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const db = "mongodb://localhost:27017/tugas_eduwork";
const produkRouter = require("./api/router");

app.use(bodyParser.json());

app.use(produkRouter);

mongoose
  .connect(db, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    app.listen(3001, (req, res) => {
      console.log("masukk pa eko");
    });
  })
  .catch((err) => {
    console.log(err);
  });
