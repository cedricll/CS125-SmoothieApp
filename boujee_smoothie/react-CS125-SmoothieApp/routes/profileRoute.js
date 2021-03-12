const express = require("express");
const router = express.Router();
const Profile = require("../models/profileModel");

router.get('/', function(req, res, next) {
    res.render('index', {title: 'Express'});
});

router.post("/login", function(reg, res) {
    const email = req.body.email;
    const password = req.body.password;

    Profile.findOne({email: email, password: password}, function(err, profile) {
        if (err) {
            console.log(err);
            return res.status(500).send();
        }

        if (!profile) {
            return res.status(404).send();
        }

        return res.status(200).send();
    })
});

// send data between back and front end
router.route("/create").post((req, res) => {
    const firstName = req.body.firstName;
    const lastName = req.body.lastName;
    const email = req.body.email;
    const password = req.body.password;
    const health = req.body.health;
    const diet = req.body.diet;

    const newProfile = new Profile({
        firstName,
        lastName, 
        email,
        password,
        health, 
        diet
    });
    newProfile.save(function(err, savedUser) {
        if (err) {
            console.log(err);
            return res.status(500).send();
        }
        
        return res.status(200).send()
    });
})

router.route("/profiles").get((req, res) => {
    Profile.find()
            .then(foundProfiles => res.json(foundProfiles))
})

module.exports = router;