const mongoose = require('mongoose');

const orgSchema = new mongoose.Schema({
  _id: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    auto: true
  },
  name: {
    type: String,
    required: true
  }
});

module.exports = mongoose.model('Org', orgSchema);
