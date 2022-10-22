const asyncHandler = require("express-async-handler");
const User = require("../models/userModel");
const Ticket = require("../models/ticketModel");
const Note = require("../models/noteModel");

/* -------- Get Note  --------- */
/* @desc   Get notes from a ticket*/
/* @route  GET /api/tickets/:tickedId/notes */
/* @access Private */
const getNotes = asyncHandler(async (req, res) => {
	// -> Get user using id and webtoken
	const user = await User.findById(req.user.id);

	if (!user) {
		res.status(401);
		throw new Error("User not found.");
	}

	const ticket = await Ticket.findById(req.params.ticketId);
	console.log(ticket);
	if (ticket.user.toString() !== req.user.id) {
		res.status(401);
		throw new Error("User not Authorized");
	}

	const notes = await Note.find({ ticket: req.params.ticketId });

	res.status(200).json(notes);
});

/* -------- Create Note  --------- */
/* @desc   Create notes for a ticket*/
/* @route  POST /api/tickets/:tickedId/notes */
/* @access Private */
const addNote = asyncHandler(async (req, res) => {
	// -> Get user using id and webtoken
	const user = await User.findById(req.user.id);

	if (!user) {
		res.status(401);
		throw new Error("User not found.");
	}

	const ticket = await Ticket.findById(req.params.ticketId);

	if (ticket.user.toString() !== req.user.id) {
		res.status(401);
		throw new Error("User not Authorized");
	}

	const note = await Note.create({
		user: req.user.id,
		text: req.body.text,
		isStaff: false,
		ticket: req.params.ticketId,
	});

	res.status(200).json(note);
});
module.exports = {
	getNotes,
	addNote,
};
