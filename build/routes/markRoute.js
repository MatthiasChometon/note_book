'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _markController = require('../controllers/markController');

var _express = require('express');

var _authService = require('../services/authService');

const router = new _express.Router();

const authService = new _authService.AuthService();

router.route('/user/:userId/marks').post(authService.authenticateToken, _markController.addMark).get(authService.authenticateToken, _markController.getAllMarks);

router.route('/mark/:markId').delete(authService.authenticateToken, _markController.deleteMark).put(authService.authenticateToken, _markController.updateMark);

exports.default = router;
//# sourceMappingURL=markRoute.js.map