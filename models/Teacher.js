const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const teacherSchema = new Schema({
  name: { type: String, required: true },
  gender: { type: String, required: true },
  
  contactDetails: { type: String, required: true },
  salary: { type: Number, required: true },
  assignedClass: { type: Schema.Types.ObjectId, ref: 'Class' }
});

module.exports = mongoose.model('Teacher', teacherSchema);
