const mongoose = require('mongoose');

const bookSchema = new mongoose.Schema({
    author: String,
    title: {type: String, require: true},
    genre: String
});

const Books = mongoose.model('book', bookSchema);

module.exports = Books;
