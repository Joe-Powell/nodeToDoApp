
const mongoose = require('mongoose');

const Schema = new mongoose.Schema({
    comments: {
        type: String,
        unique: false
    }

})

const Comments = mongoose.model('text', Schema);

module.exports = Comments;
