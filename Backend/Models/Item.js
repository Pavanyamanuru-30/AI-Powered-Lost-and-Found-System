const mongoose = require('mongoose');

const ItemSchema = new mongoose.Schema({
  type: { type: String, enum: ['lost', 'found'], required: true },
  title: String,
  description: String,
  category: String,
  location: String,
  date: { type: Date, default: Date.now },
  embedding: [Number]
});

module.exports = mongoose.model('Item', ItemSchema);