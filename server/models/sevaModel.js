const mongoose = require('mongoose');

const sevaSchema = new mongoose.Schema({
  sevaName: { type: String, required: true },
  name: { type: String, required: true }, // New field
  dateOfSeva: { type: Date, required: true },
});

const Seva = mongoose.model('Seva', sevaSchema);

module.exports = Seva;
