'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.UserSchema = undefined;

var _mongoose = require('mongoose');

var _mongoose2 = _interopRequireDefault(_mongoose);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const Schema = _mongoose2.default.Schema;

const UserSchema = exports.UserSchema = new Schema({
    firstName: {
        type: String,
        required: 'Enter a surname'
    },
    lastName: {
        type: String,
        required: 'Enter a family name'
    },
    email: {
        type: String,
        required: 'Enter your email'
    },
    password: {
        type: String,
        required: 'Enter a password'
    },
    created_date: {
        type: Date,
        default: Date.now
    }
});
//# sourceMappingURL=userModel.js.map