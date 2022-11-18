const mongoose = require('mongoose');

const taskSchema = mongoose.Schema({
  name: String,
  desc: String,
  boardId: String,
  created_date: {
    type: Date,
    required: true,
  },
  logs: {
    type: Object
  }
});

const Task = mongoose.model('task', taskSchema);

module.exports = {
  Task
};