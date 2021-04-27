import mongoose from 'mongoose';
import { UserSchema } from '../models/userModel';
const User = mongoose.model('User', UserSchema);

const bcrypt = require("bcrypt");
const jwt = require('jsonwebtoken')

import { AuthService } from '../services/authService'
const authService = new AuthService()

let refreshTokens = []
export const register = async (req, res) => {
    // create new user with body
    let newUser = new User(req.body);

    if (req.body.password) {
        // generate salt to hash password
        const salt = await bcrypt.genSalt(10);
        // now we set user password to hashed password
        newUser.password = await bcrypt.hash(newUser.password, salt);
    }

    // try to save the user
    newUser.save((err, user) => {
        if (err) res.send(err);
        res.json(user);
    });
};

export const login = (req, res) => {
    // Test if body is not empty
    if(!req.body.email) res.send("no email entered")
    if(!req.body.password) res.send("no password entered")
    // Test if user exist
    User.findOne({ email: req.body.email }, async (err, user) => {
        if (err) res.json(err)
        if (user == null) res.send("this user not exist")

        // check user password with hashed password stored in the database
        const validPassword = await bcrypt.compare(req.body.password, user.password);
        if (!validPassword) res.status(400).json({ error: "Invalid Password" });

        const user_token = { email: req.body.email, password: req.body.password }
        const accessToken = authService.generateAccessToken(user_token)
        const refreshToken = jwt.sign(user_token, process.env.REFRESH_TOKEN_SECRET)
        refreshTokens.push(refreshToken)
        res.json({ accessToken: accessToken, refreshToken: refreshToken })
    });
}
