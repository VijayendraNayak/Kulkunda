const mongoose = require('mongoose');

const sevaSchema = new mongoose.Schema({
  sevaName: { type: String, required: true },
  userName: { type: String, required: true },
  phoneNumber: { type: String, required: true },
  dateOfSeva: { type: Date, required: true },
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true }, // Corrected reference to User model
});

const Seva = mongoose.model('Seva', sevaSchema);

module.exports = Seva;
