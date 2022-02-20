const express = require('express');

const usersRouter = express.Router();

usersRouter.get('/');
usersRouter.post('/');
usersRouter.delete('/:id');

module.exports = usersRouter;
