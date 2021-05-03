'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _userController = require('../controllers/userController');

var _express = require('express');

var _authService = require('../services/authService');

const router = new _express.Router();

const authService = new _authService.AuthService();

router.route('/user/:userId').get(authService.authenticateToken, _userController.getUserWithID);

exports.default = router;
//# sourceMappingURL=userRoute.js.map