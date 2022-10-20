const asyncHandler = require("express-async-handler");
const User = require("../models/userModel");
const Ticket = require("../models/ticketModel");

/* -------- Get User Tickets --------- */

/* @desc   get user info*/
/* @route  GET /api/tickets */
/* @access Private */

const getTickets = asyncHandler(async (req, res) => {
  res.status(200).json({ message: "getTickets" });
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
