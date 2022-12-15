const mongoose = require('mongoose');

const taskSchema = mongoose.Schema({
  name: String,
  description: String,
  boardId: String,
  created_date: Date,
  completed: {
    type: Boolean,
    default: false,
  },
  status: String,
  logs: Object
});

const Task = mongoose.model('task', taskSchema);

module.exports = {
  Task
};