const express = require("express");
const router = express.Router({ mergeParams: true });
const { getNotes, addNote } = require("../controllers/noteControllers");

const { protection } = require("../middleware/authMiddleware");

router.route("/").get(protection, getNotes).post(protection, addNote);

module.exports = router;

// /api/tickets/:ticketId/notes
