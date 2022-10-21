const asyncHandler = require("express-async-handler");
const bcrypt = require("bcryptjs");
const User = require("../models/userModel");
const jsonWebToken = require("jsonwebtoken");

/* -------- Register User --------- */

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

	//Find if user exists
	const userExists = await User.findOne({ email });

	if (userExists) {
		res.status(400);
		throw new Error("User already exist");
	}

	//Hash password
	const salt = await bcrypt.genSalt(10);
	const hashedPassword = await bcrypt.hash(password, salt);

	//Create user
	const user = await User.create({
		name,
		email,
		password: hashedPassword,
	});

	if (user) {
		res.status(201).json({
			_id: user._id,
			name: user.name,
			email: user.email,
			token: generateToken(user._id),
		});
	} else {
		res.status(400);
		throw new Error("Invalid user");
	}
});

/* -------- Login User --------- */

/* @desc   Login user */
/* @route  /api/users/login */
/* @access Public */
const logUser = asyncHandler(async (req, res) => {
	const { email, password } = req.body;

	//  Find user on DB and compare password with hash value from bcrypt
	const user = await User.findOne({ email });

	if (user) {
		const comparePassword = await bcrypt.compare(password, user.password);
		if (comparePassword) {
			res.status(200).json({
				_id: user._id,
				name: user.name,
				email: user.email,
				token: generateToken(user._id),
			});
		} else {
			res.status(401);
			throw new Error("Invalid credentials");
		}
	} else {
		res.status(401);
		throw new Error("Invalid credentials");
	}
});

/* -------- Get User info --------- */

/* @desc   get user info*/
/* @route  /api/users/me */
/* @access Private */

const getMe = asyncHandler(async (req, res) => {
	const { _id, name, email } = req.user;
	const user = {
		id: _id,
		name,
		email,
	};

	res.status(200).json(user);
});

//Generate WebToken

const generateToken = (id) => {
	return jsonWebToken.sign({ id }, process.env.JWT_SECRET, {
		expiresIn: "45d",
	});
};

module.exports = {
	registerUser,
	logUser,
	getMe,
};
