import mongoose from 'mongoose';
import { UserSchema } from '../models/userModel';

const User = mongoose.model('User', UserSchema);

export const getUserWithID = (req, res) => {
    if(!req.params.userId) res.send("no id for user")
    User.findById(req.params.userId, (err, user) => {
        if (err) res.send(err);
        res.json(user);
    });
};