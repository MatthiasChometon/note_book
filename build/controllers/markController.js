'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.getAllMarks = exports.updateMark = exports.deleteMark = exports.addMark = undefined;

var _mongoose = require('mongoose');

var _mongoose2 = _interopRequireDefault(_mongoose);

var _markModel = require('../models/markModel');

var _userModel = require('../models/userModel');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const Mark = _mongoose2.default.model('Mark', _markModel.MarkSchema);
const User = _mongoose2.default.model('User', _userModel.UserSchema);

// import { ModelService } from '../services/modelService'
// const userService = new ModelService(User)

const addMark = exports.addMark = async (req, res) => {
    if (!req.params.userId) res.send('There is no user id');
    let newMark = new Mark(req.body);

    if (req.params.userId) newMark.userId = req.params.userId;
    newMark.save(newMark, (err, mark) => {
        if (err) res.json(err);
        res.json(mark);
    });
};
const deleteMark = exports.deleteMark = (req, res) => {
    if (!req.params.markId) res.send("no id for mark");
    Mark.findByIdAndDelete({ _id: req.params.markId }, err => {
        if (err) res.json(err);
        res.json("mark deleted");
    });
};

const updateMark = exports.updateMark = (req, res) => {
    if (!req.params.markId) res.send("no id for mark");
    Mark.findByIdAndUpdate({ _id: req.params.markId }, req.body, { new: true }, (err, mark) => {
        if (err) res.json(err);
        res.json(mark);
    });
};

const getAllMarks = exports.getAllMarks = (req, res) => {
    if (!req.params.userId) res.send("no id for user");
    Mark.find({ userId: req.params.userId }, (err, marks) => {
        if (err) res.json(err);
        res.json(marks);
    });
};
//# sourceMappingURL=markController.js.map