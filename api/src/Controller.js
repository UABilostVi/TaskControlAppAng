const { Board } = require('./models/Boards');
const { Task } = require('./models/Tasks');

const addBoard = async (req, res) => {
  const { name } = req.body;
  const board = new Board({
    name: name,
    created_date: new Date().toISOString(),
    logs: { message: "Board was created", time: new Date().toISOString() }
  });
  board.save().then((listDoc) => {
    return res.status(200).send(listDoc)
  });
};

const updateBoard = async (req, res) => {
  Board.findOneAndUpdate({_id: req.params.id}, {$set: req.body})
    .then(() => {
      res.sendStatus(200)
    })
};

const getBoards = async (req, res) => {
  Board.find().then((boards)=> {
    res.status(200).send(boards);
  });
};

const getTasks = async (req, res) => {
  Task.find({boardId: req.params.id}).then((tasks) => {
    res.send(tasks)
  })
};

const addTask = async (req, res) => {
  let newTask = new Task({
    name: req.body.name,
    boardId: req.params.id,
    created_date: new Date().toISOString(),
    logs: { message: "Task was created", time: new Date().toISOString() }
  });
  newTask.save().then((newTaskDoc) => {
    res.send(newTaskDoc)
  })
};

const updateTask = async (req, res) => {
  Task.findOneAndUpdate({_id: req.params.taskId}, {$set: req.body})
  .then(() => {
    res.sendStatus(200)
  })
};

const delTask = async (req, res) => {
  Task.findOneAndRemove({_id: req.params.taskId})
    .then((remTask) => {
      res.status(200).send(remTask)
    })
};

const deleteBoard = async (req, res) => {
  Board.findOneAndRemove({_id: req.params.id})
    .then((remBoard) => {
      res.status(200).send(remBoard)
    })
};

const getBoard = async (req, res) => {
  Board.findOne({ _id: req.params.id })
    .then((board) => {
      res.status(200).send({ board })
    })
};

module.exports = {
  getBoard,
  updateBoard,
  addBoard,
  getBoards,
  deleteBoard,
  getTasks,
  addTask,
  delTask,
  updateTask
};
