const bodyParser = require("body-parser");
const express = require("express");
const app = express();
const cors = require("cors");
const path = require("path");
const mongoose = require("mongoose");
const port = process.env.PORT || 3001;

app.use(bodyParser.json());

app.use(cors());

// mongoose
mongoose.connect("mongodb+srv://smoothie_admin:Banana4U@cluster0.d96nw.mongodb.net/profileDB?retryWrites=true&w=majority")

app.use("/", require("./routes/profileRoute"));

// data schema and model
const profileSchema = {
    firstName: String, 
    lastName: String,
    email: String, 
    password: String
}

// const Profile = mongoose.model("Profile", profileSchema);

// API routes
app.get('/profiles', function(req, res) {
    Profile.find().then(profiles => res.json(profiles));
    res.send("express started")
})

app.listen(port, function() {
    console.log("express is running");
})