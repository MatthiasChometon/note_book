'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.login = exports.register = undefined;

var _mongoose = require('mongoose');

var _mongoose2 = _interopRequireDefault(_mongoose);

var _userModel = require('../models/userModel');

var _authService = require('../services/authService');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const User = _mongoose2.default.model('User', _userModel.UserSchema);

const bcrypt = require("bcrypt");
const jwt = require('jsonwebtoken');

const authService = new _authService.AuthService();

let refreshTokens = [];
const register = exports.register = async (req, res) => {
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
        if (err) return res.send(err);
        return res.status(200).json(user);
    });
};

const login = exports.login = (req, res) => {
    // Test if body is not empty
    if (!req.body.email) res.send("no email entered");
    if (!req.body.password) res.send("no password entered");
    // Test if user exist
    User.findOne({ email: req.body.email }, async (err, user) => {
        if (err) return res.json(err);
        if (user == null) res.send("this user not exist");

        // check user password with hashed password stored in the database
        const validPassword = await bcrypt.compare(req.body.password, user.password);
        if (!validPassword) return res.status(400).json({ error: "Invalid Password" });

        const user_token = { email: req.body.email, password: req.body.password };
        const accessToken = authService.generateAccessToken(user_token);
        const refreshToken = jwt.sign(user_token, process.env.REFRESH_TOKEN_SECRET);
        refreshTokens.push(refreshToken);
        return res.status(200).json({ accessToken: accessToken, refreshToken: refreshToken, user: user });
    });
};
//# sourceMappingURL=authController.js.map