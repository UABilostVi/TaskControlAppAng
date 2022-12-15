const fs = require('fs');
const express = require('express');
const morgan = require('morgan');

const PORT = 8080;

const app = express();
const mongoose = require('mongoose');

const { authMiddleware } = require('./middleware/authMiddleware');

const accesLogStream = fs.createWriteStream('access.log', { flags: 'a' });

mongoose.connect('mongodb+srv://BilostVit:MDB136661991@bilostvit.kowgkrt.mongodb.net/taskcontrollapp?retryWrites=true&w=majority');

const { Router } = require('./router');
const bodyParser = require('body-parser');

app.use(bodyParser.json())
app.use(morgan('combined', { stream: accesLogStream }));

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*"); // update to match the domain you will make the request from
  res.header("Access-Control-Allow-Methods", "GET, POST, PATCH, DELETE, HEAD, OPTIONS, PUT");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.use('/', Router);

app.listen(PORT);

// ERROR HANDLER
function errorHandler(err, req, res) {
  console.error(err.name);
  if (err.name === 'ValidationError' || err.name === 'MongoServerError') {
    return res.status(400).send({ message: err.message });
  }
  return res.status(500).send({ message: err.message });
}

app.use(errorHandler);