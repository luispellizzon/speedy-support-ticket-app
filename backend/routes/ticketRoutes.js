const express = require("express");
const router = express.Router();
const { getTickets, getTicket, createTicket } = require("../controllers/ticketController");

const { protection } = require("../middleware/authMiddleware");

router.route("/").get(protection, getTickets).post(protection, createTicket);

router.route("/:id").get(protection, getTicket);

module.exports = router;
