const { response } = require("express");
const { errorHandler } = require("./middleware/errorMiddleware");
const express = require("express");
const dotenv = require("dotenv").config();

const app = express();

//Middleware body-parser
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

const PORT = process.env.PORT || 5000;

app.get("/", (req, res) => {
  res.status(200).json({ message: "Welcome to Speedy Support Ticket API" });
});

// Routes
app.use("/api/users", require("./routes/userRoutes"));

app.use(errorHandler);

app.listen(PORT, () => console.log(`Server running on: ${PORT}`));
