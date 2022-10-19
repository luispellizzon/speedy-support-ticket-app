const express = require("express");
const {
  logUser,
  registerUser,
  getMe,
} = require("../controllers/userController");
const { protection } = require("../middleware/authMiddleware");

const router = express.Router();

router.post("/", registerUser);

router.post("/login", logUser);

router.get("/me", protection, getMe);

module.exports = router;
