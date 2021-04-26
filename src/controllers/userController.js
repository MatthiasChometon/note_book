import mongoose from 'mongoose';
import { UserSchema } from '../models/userModel';
import { MarkSchema } from '../models/markModel';

const User = mongoose.model('User', UserSchema);

export const addNewUser = (req, res) => {
    let newUser = new User(req.body);

    newUser.save((err, user) => {
        if (err) {
            res.send(err);
        }
        res.json(user);
    });
};

export const getUserWithID = (req, res) => {
    User.findById(req.params.userId, (err, user) => {
        if (err) {
            res.send(err);
        }
        res.json(user);
    });
};