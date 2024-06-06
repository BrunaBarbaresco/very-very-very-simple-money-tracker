const express = require("express");
const cors = require("cors");
require("dotenv").config();
const app = express();
const mongoose = require("mongoose");
const Transaction = require("./models/Transaction.js");

app.use(cors());
app.use(express.json());

app.post("/api/transaction", async (req, res) => {
  try {
    await mongoose.connect(process.env.MONGO_URL);
    const { name, description, datetime, price } = req.body;
    const transaction = await Transaction.create({
      name,
      description,
      datetime,
      price,
    });
    res.json(transaction);
  } catch (error) {
    console.log("error", error);
  }
});

app.get("/api/transactions", async (req, res) => {
  try {
    await mongoose.connect(process.env.MONGO_URL);
    const transactions = await Transaction.find();
    res.json(transactions);
  } catch (error) {
    console.log("error", error);
  }
});

app.listen(4000);
