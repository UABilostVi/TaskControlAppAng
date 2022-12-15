const { Board } = require('./models/Boards');
const { Task } = require('./models/Tasks');

const addBoard = async (req, res) => {
  const { name, desc } = req.body;
  const board = new Board({
    name: name,
    description: desc,
    created_date: new Date(),
    logs: { message: "Board was created", time: new Date() }
  });
  board.save().then((listDoc) => {
    return res.status(200).send(listDoc)
  });
};

const updateBoard = async (req, res) => {
  Board.findOneAndUpdate({_id: req.params.id}, {$set: req.body})
    .then(() => {
      res.status(200).json('UPD')
    })
};

const getBoards = async (req, res) => {
  Board.find().then((boards)=> {
    res.status(200).send(boards);
  });
};

const getTasks = async (req, res) => {
  await Task.find({boardId: req.params.id}).then((tasks) => {
    res.send(tasks)
  })
};

const addTask = async (req, res) => {
  let newTask = new Task({
    name: req.body.name,
    description: req.body.description,
    boardId: req.params.id,
    created_date: new Date(),
    status: 'new',
    logs: { message: "Task was created", time: new Date()}
  });
  newTask.save().then((newTaskDoc) => {
    res.send(newTaskDoc)
  })
};

const updateTask = async (req, res) => {
  Task.findOneAndUpdate({_id: req.params.taskId}, {$set: req.body})
  .then(() => {
    res.status(200).json("Updated")
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
      res.status(200).send(board)
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