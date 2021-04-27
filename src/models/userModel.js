import mongoose from 'mongoose';

const Schema = mongoose.Schema;

export const UserSchema = new Schema({
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
