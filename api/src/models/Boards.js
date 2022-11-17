const mongoose = require('mongoose');

const boardSchema = mongoose.Schema({
  name: String,
  created_date: {
    type: Date,
    required: true,
  },
  logs: {
    type: Object
  }
});

const Board = mongoose.model('board', boardSchema);

module.exports = {
  Board
};