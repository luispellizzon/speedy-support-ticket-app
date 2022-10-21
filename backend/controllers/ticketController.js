const asyncHandler = require("express-async-handler");
const User = require("../models/userModel");
const Ticket = require("../models/ticketModel");

/* -------- Get User Tickets --------- */

/* @desc   get user info*/
/* @route  GET /api/tickets */
/* @access Private */

const getTickets = asyncHandler(async (req, res) => {
  // -> Get user using id and webtoken
  const user = await User.findById(req.user.id);

  if (!user) {
    res.status(401);
    throw new Error("User not found.");
  }

  const tickets = await Ticket.find({ user: req.user.id });

  res.status(200).json({ user, message: "getTickets" });
});

/* -------- Creat User Tickets --------- */

/* @desc   Create user info*/
/* @route  POST /api/tickets */
/* @access Private */

const createTicket = asyncHandler(async (req, res) => {
  res.status(200).json({ message: "createTickets" });
});

module.exports = {
  getTickets,
  createTicket,
};
