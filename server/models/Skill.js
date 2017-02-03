const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const SkillSchema = new Schema ({
  name: {type: String, required: true, minlength: 1},
  years: {type: Number, required: true, min: 0},
  stars: {type: Number, required: true, min: 0}
});

const Skill = mongoose.model('Skill', SkillSchema);

console.log("loaded skill model!");
