const { Schema, model } = require('mongoose');

const tableSchema = new Schema({
    title: String,
    concept: String,
    users: String,
    content: {
        type: String,
        required: true
    },
    author: String,
    date: {
        type: Date,
        default: Date.now
    }
}, {
    timestamps: true
});

module.exports = model('Table', tableSchema);