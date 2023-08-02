const express = require('express');
const userController = require('../controllers/user.controller');
const { authenticate } = require('../middleware/aunthicate.middleware');
const UserRoute = express.Router();

UserRoute.post('/', userController.create);
UserRoute.post('/login', userController.login);
UserRoute.get('/me', [
  authenticate
], userController.me);


module.exports = UserRoute;