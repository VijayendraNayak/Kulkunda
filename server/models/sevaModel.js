const mongoose = require('mongoose');

const sevaSchema = new mongoose.Schema({
  sevaName: { type: String, required: true },
  dateOfSeva: { type: Date, required: true },
});

const Seva = mongoose.model('Seva', sevaSchema);

module.exports = Seva;
