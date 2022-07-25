const express = require('express');

const postRouter = express.Router();
const { validateTokenField } = require('../middlewares/validateToken');
const postController = require('../controllers/postController');

postRouter.use(validateTokenField);

postRouter.get('/', postController.getAllPosts);

module.exports = postRouter;
