const asyncHandler = require("express-async-handler");

/* @desc   Register new user */
/* @route  /api/users */
/* @access Public */
const registerUser = asyncHandler(async (req, res) => {
  const { name, email, password } = req.body;

  //Validation
  if (!name || !email || !password) {
    res.status(400);
    throw new Error("Please include all fields");
  }
});

/* @desc   Login user */
/* @route  /api/users/login */
/* @access Public */
const logUser = asyncHandler(async (req, res) => {
  res.body("User logger ");
});

module.exports = {
  registerUser,
  logUser,
};
