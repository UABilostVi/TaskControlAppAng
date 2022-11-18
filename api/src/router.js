const express = require('express');
const { authMiddleware } = require('./middleware/authMiddleware');

const asyncWrapper = (controller) => (req, res, next) => controller(req, res, next).catch(next);

const router = express.Router();
const {
  getBoard,
  deleteBoard,
  updateBoard,
  getBoards, 
  addBoard,
  getTasks,
  addTask,
  delTask,
  updateTask
} = require('./Controller');

router.get('/dashboard', asyncWrapper(getBoards));

router.post('/dashboard', asyncWrapper(addBoard));

router.get('/board/:id', asyncWrapper(getBoard));

router.patch('/board/:id', asyncWrapper(updateBoard));

router.delete('/board/:id', asyncWrapper(deleteBoard));

router.get('/board/:id/tasks', asyncWrapper(getTasks)); 

router.post('/board/:id/tasks', asyncWrapper(addTask)); 

router.patch('/board/:id/tasks/:taskId', asyncWrapper(updateTask));

router.delete('/board/:id/tasks/:taskId', asyncWrapper(delTask));



module.exports = {
  Router: router,
};