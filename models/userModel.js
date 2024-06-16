const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  _id: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    auto: true
  },
  organisation: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Organisation',
    required: true
  },
  name: {
    type: String
  },
  email: {
    type: String
  },
  phone: {
    type: String
  }
});

module.exports = mongoose.model('User', userSchema);
