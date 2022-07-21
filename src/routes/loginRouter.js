const express = require('express');

const loginRouter = express.Router();
const { validateUserFields } = require('../middlewares/validateUser');
const userController = require('../controllers/userController');

loginRouter.post('/', validateUserFields, userController.loginUser);

module.exports = loginRouter;
