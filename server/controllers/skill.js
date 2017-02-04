'use strict';

console.log("loaded server-side user controller");
const mongoose = require('mongoose');
const User = mongoose.model('User');
const Skill = mongoose.model('Skill');

module.exports = {
    postNewSkill: function(req, res) {
        // console.log(req.body);
        let newSkill = new Skill({
            name : req.body.name,
            stars : req.body.stars,
            years : req.body.years,
            user: req.body.user_id
        });
        console.log(newSkill);
        User.findOne({_id : newSkill.user }, function(err, user) {
            if(err) {
                res.status(500).json(err);
            } else {
                newSkill.save(function(err) {
                    if(err) {
                        res.status(500).json(err);
                    } else {
                        console.log("omg it worked!");
                        user._skills.push(newSkill);
                        console.log("here is the skills array \n" + user._skills);
                        res.status(200).json({data: "Succes", message: "Skill posted to " + user.username})
                    }

                });
            }
        });
    }
}
