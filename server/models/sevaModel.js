const mongoose = require('mongoose');

const sevaSchema = new mongoose.Schema({
  sevaname: { type: String, required: true },
  username: { type: String, required: true }, // New field
  phonenumber: { type: Number, required: true },
  sevadate: { type: Date, required: true },
  userId: { type: String, required: true },
});

const Seva = mongoose.model('Seva', sevaSchema);

module.exports = Seva;
