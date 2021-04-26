import mongoose from 'mongoose';
import { UserSchema } from '../models/userModel';
import { MarkSchema } from '../models/markModel';

const User = mongoose.model('User', UserSchema);
const Mark = mongoose.model('Mark', MarkSchema);

export const addMark = (req, res) => {
    let newMark = new Mark(req.body);

    User.findOneAndUpdate({ _id: req.params.userId }, { $addToSet: { "marks": [newMark] } }, { new: true }, (err, mark) => {
        if (err) return res.sendStatus(403)
        res.json(mark)
    });
};
export const deleteMark = (req, res) => {
    var marks_filtered = [];
    const user = User.findById({ _id: req.params.userId }, (err, user) => {
        marks_filtered = user.marks.filter(function (value, index, arr) {
            return value._id != req.params.markId;
        });
    }).then(() => {
        User.findOneAndUpdate({ _id: req.params.userId }, { $set: { "marks": marks_filtered } }, { new: true }, (err, user) => {
            if (err) return res.sendStatus(403)
            res.json(user)
        });
    });
};