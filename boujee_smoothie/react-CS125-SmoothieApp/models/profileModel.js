const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const profileSchema = new Schema({
    firstName: String, 
    lastName: String,
    email: String, 
    password: String, 
    health: String,
    diet: String
    // add more
});

const Profile = mongoose.model("Profile", profileSchema);

module.exports = Profile;