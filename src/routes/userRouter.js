const express = require('express');

const userRouter = express.Router();
const { validateUserFields } = require('../middlewares/validateUser');
const userController = require('../controllers/userController');
const { validateTokenField } = require('../middlewares/validateToken');

userRouter.get('/', validateTokenField, userController.getAllUsers);

userRouter.post('/', validateUserFields, userController.createUser);

module.exports = userRouter;
