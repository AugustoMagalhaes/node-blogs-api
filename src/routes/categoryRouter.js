const express = require('express');

const categoryRouter = express.Router();
const { validateCategoryName } = require('../middlewares/validateCategory');
const { validateTokenField } = require('../middlewares/validateToken');
const categoryController = require('../controllers/categoryController');

categoryRouter.get('/', validateTokenField, categoryController.getAllCategories);

categoryRouter.post(
  '/',
  validateTokenField,
  validateCategoryName,
  categoryController.createCategory,
);

module.exports = categoryRouter;
