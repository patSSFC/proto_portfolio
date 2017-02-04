'use strict';

console.log("loaded server-side user controller");
const mongoose = require('mongoose');
const User = mongoose.model('User');

module.exports = {
    signup: function(req, res) {
        console.log("inside user.singup" + req.body);
        let newUser = new User(req.body);
        console.log("new uesr\n\n" + newUser);
        User.findOne({username: req.body.username}, function(err, user) {
            if(err) {
                res.status(500).json(err);
            } else {
                if(!user) {
                    newUser.save(function(err) {
                        if(err) {
                            res.status(500).json(err);
                        } else {
                            res.status(200).json({user: user, message: "Your account was created!"});
                        }
                    });
                } else {
                    res.status(500).json({errorName: "userAlreadyExists", message: "An account already exists with this name, please login with your credentials"});
                }
            }
        });
    },
    login: function(req, res) {
        console.log("Inside user.login" + req.params.username);
        User.findOne({username: req.params.username}, function(err, user) {
            if(err) {
                res.status(500).json(err);
            } else {
                if(!user) {
                    res.status(500).json({errorName: "noUserFound", message: "No such user found in db"});
                } else {
                    res.status(200).json({user: user, message: "Successfully logged in!"});
                }
            }
        });
    }
}
