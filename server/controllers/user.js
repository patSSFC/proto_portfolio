'use strict';

console.log("loaded server-side user controller");
const mongoose = require('mongoose');
const User = mongoose.model('User');

module.exports = {
    signup: function(req, res) {
        console.log("inside user controller " + req.body);
        let newUser = new User(req.body);
        newUser.save()
    }
}
