const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ProjectSchema = new Schema({
  title: {type: String, required: true, minlength: 1},
  blurb: {type: String, required: true, maxlength: 500},
  detail: {type: String, minlength: 1},
  _skills: [{type: Schema.Types.ObjectId, ref: 'Skill'}],
  code: {type: String, required: true, minlength:1}
});

const Project = mongoose.model('Project', ProjectSchema);

console.log("loaded project model!");
