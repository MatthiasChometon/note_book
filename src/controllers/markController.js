import mongoose from 'mongoose';

import { MarkSchema } from '../models/markModel';
import { UserSchema } from '../models/userModel';
const Mark = mongoose.model('Mark', MarkSchema);
const User = mongoose.model('User', UserSchema);

// import { ModelService } from '../services/modelService'
// const userService = new ModelService(User)

export const addMark = async (req, res) => {
    if (!req.params.userId) res.send('There is no user id')
    let newMark = new Mark(req.body);

    if (req.params.userId) newMark.userId = req.params.userId
    newMark.save(newMark, (err, mark) => {
        if (err) res.json(err)
        res.json(mark)
    })
}

export const deleteMark = (req, res) => {
    if (!req.params.markId) res.send("no id for mark")
    Mark.findByIdAndDelete({ _id: req.params.markId }, (err) => {
        if (err) res.json(err)
        res.json("mark deleted")
    });
}

export const updateMark = (req, res) => {
    if (!req.params.markId) res.send("no id for mark")
    Mark.findByIdAndUpdate({ _id: req.params.markId }, req.body,  {new: true}, (err, mark) => {
        if (err) res.json(err)
        res.json(mark)
    })
};

export const getAllMarks = (req, res) => {
    if (!req.params.userId) res.send("no id for user")
    Mark.find({ userId: req.params.userId }, (err, marks) => {
        if (err) res.json(err)
        res.json(marks)
    })
};