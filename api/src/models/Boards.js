const mongoose = require('mongoose');

const boardSchema = mongoose.Schema({
  name: String,
  description: String,
  created_date: Date,
  logs:  Object
});

const Board = mongoose.model('board', boardSchema);

module.exports = {
  Board
};