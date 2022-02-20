const express = require('express');
const {
  httpGetAllUsers,
  httpAddNewUser,
  httpDeleteUser
} = require('./users.controller');

const usersRouter = express.Router();

usersRouter.get('/');
usersRouter.post('/');
usersRouter.delete('/:id');

module.exports = usersRouter;
