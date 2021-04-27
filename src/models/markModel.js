import mongoose from 'mongoose';

const Schema = mongoose.Schema;

export const MarkSchema = new Schema({
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
