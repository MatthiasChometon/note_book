'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.MarkSchema = undefined;

var _mongoose = require('mongoose');

var _mongoose2 = _interopRequireDefault(_mongoose);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const Schema = _mongoose2.default.Schema;

const MarkSchema = exports.MarkSchema = new Schema({
    userId: {
        type: String,
        required: 'Enter a user id'
    },
    title: {
        type: String,
        required: 'Enter a title'
    },
    content: {
        type: String,
        required: 'There is no content'
    },
    created_date: {
        type: Date,
        default: Date.now
    }
});
//# sourceMappingURL=markModel.js.map