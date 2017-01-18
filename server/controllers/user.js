'use strict';

console.log("loaded server-side user controller");
const mongoose = require('mongoose');
const User = mongoose.model('User');

module.exports = {
    signup: function(req, res) {
        console.log("inside user controller " + req.body);
        let newUser = new User(req.body);
        console.log("new uesr\n\n" + newUser);
        newUser.save(function(err) {
            if(err) {
                res.status(500).json(err);
            } else {
                res.status(200).json({user: newUser, message: "Your Account was Created!"});
            }
        });
    }
}
