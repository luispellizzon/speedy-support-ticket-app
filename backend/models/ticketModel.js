const mongoose = require("mongoose");

const ticketSchema = mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "User",
    },
    product: {
      type: String,
      required: [true, "Please, select a product"],
      enum: ["Iphone", "Macbook", "Ipad", "Airpods", "Apple Watch", "Airtags"],
    },
    description: {
      type: String,
      required: [true, "Please, enter a description about the issue"],
    },
    status: {
      type: String,
      required: true,
      enum: ["new", "open", "closed"],
      default: "new",
    },
  },
  {
    timestamp: true,
  }
);

module.exports = mongoose.model("Ticket", ticketSchema);
