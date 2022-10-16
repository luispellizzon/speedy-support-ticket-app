const { response } = require("express");
const express = require("express");
const dotenv = require("dotenv").config();

const app = express();
const PORT = process.env.PORT || 5000;

app.get("/", (req, res) => {
  res.status(200).json({ message: "Welcome to Speedy Support Ticket API" });
});

app.listen(PORT, () => console.log(`Server running on: ${PORT}`));
