const express = require('express');

const userRouter = express.Router();
const { validateUserFields } = require('../middlewares/validateUser');
const userController = require('../controllers/userController');

userRouter.post('/', validateUserFields, userController.createUser);

module.exports = userRouter;
