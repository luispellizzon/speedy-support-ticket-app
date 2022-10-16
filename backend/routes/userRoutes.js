const express = require("express");
const { logUser, registerUser } = require("../controllers/userController");

const router = express.Router();

router.post("/", registerUser);

router.post("/login", logUser);

module.exports = router;
