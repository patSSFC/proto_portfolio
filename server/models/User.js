const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = new Schema({
    username: {type: String, required: true, minlength: 1},
    description: {type: String, maxlength: 250},
    _projects: [{type: Schema.Types.ObjectId, ref: 'Project'}],
    skills: [{type: String, minlength: 1}]
});

const User = mongoose.model('User', UserSchema);

console.log("loaded user model!!");
