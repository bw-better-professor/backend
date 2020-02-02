const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const usersRouter = require('./users/users-router')
const studentsRouter = require('./students/student-router')




const server = express();

server.use(helmet());
server.use(cors());
server.use(express.json());
server.use('/api/users', usersRouter);
server.use('/api/students', studentsRouter);


module.exports = server;
