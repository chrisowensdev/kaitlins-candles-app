const express = require('express');
const {
    httpGetAllProducts,
    httpAddNewProduct,
    httpDeleteProduct,
} = require('./products.controller');

const productsRouter = express.Router();

productsRouter.get('/', httpGetAllProducts);
productsRouter.post('/', httpAddNewProduct);
productsRouter.delete('/:id', httpDeleteProduct);

module.exports = productsRouter;
