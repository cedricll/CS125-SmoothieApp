const mongoose = require("mongoose");

const smoothieSchema = {
    name: String,
    calories: String
}

const Smoothie = mongoose.model("Smoothie", smoothieSchema);

module.exports = Smoothie;