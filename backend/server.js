const path = require("path");
require("colors");
const { errorHandler } = require("./middleware/errorMiddleware");
const connectDB = require("./config/db");
const express = require("express");
require("dotenv").config();

// Connect to DB
connectDB();

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
app.use("/api/tickets", require("./routes/ticketRoutes"));

// Serve frontend FOR PRODUCTION to deploy on Heroku
if (process.env.NODE_ENV === "production") {
	//Set build folder as static
	app.use(express.static(path.join(__dirname, "../frontend/build")));

	app.get("*", (_, res) => {
		res.sendFile(path.join(__dirname, "../frontend/build/index.html"));
	});
} else {
	app.get("/", (_, res) => {
		res.status(200).json({ message: "Welcome to Speedy Support Ticket API" });
	});
}

app.use(errorHandler);

app.listen(PORT, () => console.log(`Server running on: ${PORT}`));
