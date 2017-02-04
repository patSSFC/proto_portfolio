const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = new Schema({
    first: {
        type: String,
        required: true,
        minlength: 1,
        set: function(str) {
            if(!str) {
                return str;
            } else {
                console.log(str.toLowerCase());
                return str.toLowerCase();
            }
        }},
    last: {
        type: String,
        required: true,
        minlength: 1,
        set: function(str) {
            if(!str) {
                return str;
            } else {
                console.log(str.toLowerCase());
                return str.toLowerCase();
            }
        }},
    username: {
        type: String,
        required: true,
        minlength: 1,
        set: function(str) {
            if(!str) {
                return str;
            } else {
                console.log(str.toLowerCase());
                return str.toLowerCase();
            }
        }},
    description: {type: String, maxlength: 250},
    _projects: [{type: Schema.Types.ObjectId, ref: 'Project'}],
    _skills: [{type: Schema.Types.ObjectId, ref: 'Skills'}],
    password: {
        type: String,
        // required: true,
        minlength: 8,
        maxlength: 32,
        validate: {
          validator: function( value ) {
            return /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&]{8,32}/.test( value );
          },
          message: "Password failed validation, you must have at least 1 number, uppercase and special character"
        }
    }
});

const User = mongoose.model('User', UserSchema);

console.log("loaded user model!!");
