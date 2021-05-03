'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _express = require('express');

var _authController = require('../controllers/authController');

const router = new _express.Router();

router.post('/login', _authController.login).post('/register', _authController.register);

exports.default = router;
//# sourceMappingURL=authRoutes.js.map