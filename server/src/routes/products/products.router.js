const express = require('express');

const productsRouter = express.Router();

productsRouter.get('/');
productsRouter.post('/');
productsRouter.delete('/');

module.exports = productsRouter;
