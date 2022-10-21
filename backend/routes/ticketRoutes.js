const express = require("express");
const router = express.Router();
const {
	getTickets,
	getTicket,
	createTicket,
	updateTicket,
	deleteTicket,
} = require("../controllers/ticketController");

const { protection } = require("../middleware/authMiddleware");

router.route("/").get(protection, getTickets).post(protection, createTicket);

router
	.route("/:id")
	.get(protection, getTicket)
	.put(protection, updateTicket)
	.delete(protection, deleteTicket);
// router.route("/:id").delete(protection, deleteTicket);
// router.route("/:id").put(protection, updateTicket);

module.exports = router;
