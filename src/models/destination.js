// models/destination.js
const mongoose = require("mongoose");

const destinationSchema = new mongoose.Schema({
  name: { type: String, required: true, unique: true },
}, { timestamps: true });

module.exports = mongoose.model("Destination", destinationSchema);