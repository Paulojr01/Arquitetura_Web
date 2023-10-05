const mongoose = require('mongoose');

const markerSchema = new mongoose.Schema({
  name: String,
  location: {
    type: [Number], 
    index: '2dsphere',
  },
});

const Marker = mongoose.model('Marker', markerSchema);

module.exports = Marker;