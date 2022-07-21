const express = require('express');

const loginRouter = express.Router();
const { validateLoginFields } = require('../middlewares/validateUser');
const userController = require('../controllers/userController');

loginRouter.post('/', validateLoginFields, userController.loginUser);

module.exports = loginRouter;
