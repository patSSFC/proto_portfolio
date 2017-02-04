const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const SkillSchema = new Schema ({
  name: {type: String, required: true, minlength: 1},
  years: {type: Number, required: true, min: 0},
  stars: {type: Number, required: true, min: 0},
  _user: {type: Schema.Types.ObjectId, ref: 'User'}
});

const Skill = mongoose.model('Skill', SkillSchema);

console.log("loaded skill model!");
