const express = require("express");
const {
  logUser,
  registerUser,
  getMe,
} = require("../controllers/userController");

const router = express.Router();

router.post("/", registerUser);

router.post("/login", logUser);

router.get("/me", getMe);

module.exports = router;
