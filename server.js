const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const usersRouter = require('./users/users-router')



const server = express();

server.use(helmet());
server.use(cors());
server.use(express.json());
server.use('/api/users', usersRouter);


module.exports = server;
