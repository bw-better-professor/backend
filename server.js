const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const usersRouter = require('./users/users-router')
const studentsRouter = require('./students/student-router')
const loginRouter = require('./auth/login')
const projectRouter = require('./projects/projects-router')




const server = express();

server.use(helmet());
server.use(cors());
server.use(express.json());

server.use('/api/auth', loginRouter);

server.use('/api/users', usersRouter);
server.use('/api/students', studentsRouter);
server.use('/api/projects', projectRouter);

server.get('/', (req, res) => {
	res.send("Everythings clear Sir'");
});


module.exports = server;
