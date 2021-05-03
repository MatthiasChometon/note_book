'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.getUserWithID = undefined;

var _mongoose = require('mongoose');

var _mongoose2 = _interopRequireDefault(_mongoose);

var _userModel = require('../models/userModel');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const User = _mongoose2.default.model('User', _userModel.UserSchema);

const getUserWithID = exports.getUserWithID = (req, res) => {
    if (!req.params.userId) res.send("no id for user");
    User.findById(req.params.userId, (err, user) => {
        if (err) res.send(err);
        res.json(user);
    });
};
//# sourceMappingURL=userController.js.map