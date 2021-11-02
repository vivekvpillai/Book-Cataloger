const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const app = express();
const port = 3000;

app.use(express.json());
app.use(cors());

const booksController = require('./controllers/books.js');
app.use('/books', booksController);

app.listen(port, () => {
    console.log('book catalog listening...');
});
mongoose.connect('mongodb://localhost:27017/bookcatalog');
mongoose.connection.once('open', () => {
    console.log('connected to mongod');
});
