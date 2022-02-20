const express = require('express');
const {
    httpGetAllCategories,
    httpAddNewCategory,
    httpDeleteCategory,
} = require('./categories.controller');

const categoriesRouter = express.Router();

categoriesRouter.get('/', httpGetAllCategories);
categoriesRouter.post('/', httpAddNewCategory);
categoriesRouter.delete('/:id', httpDeleteCategory);

module.exports = categoriesRouter;
