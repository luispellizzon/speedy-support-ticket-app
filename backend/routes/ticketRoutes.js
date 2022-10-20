const express = require("express");
const router = express.Router();
const { getTickets, createTicket } = require("../controllers/ticketController");

const { protection } = require("../middleware/authMiddleware");

router.route("/").get(protection, getTickets).post(protection, createTicket);

module.exports = router;
