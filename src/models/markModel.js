import mongoose from 'mongoose';

const Schema = mongoose.Schema;

export const MarkSchema = new Schema({
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
