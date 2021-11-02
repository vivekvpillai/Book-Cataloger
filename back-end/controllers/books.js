const express = require('express');
const router = express.Router();
const Books = require('../models/books.js');

router.get('/', (req, res) => {
    Books.find((err, bookList) => {
        if (err) {
            console.log(err.message);
            res.send(err.message);
        } else {
            res.json(bookList);
        }
    });
});

router.post('/', (req, res) => {
    req.body.author = req.body.author === '' ? 'Unknown' : req.body.author;
    req.body.genre = req.body.genre === '' ? 'Unclassified' : req.body.genre;
    Books.create(req.body, (err, newBook) => {
        if (err) {
            console.log(err.message);
            res.send(err.message);
        } else {
            res.json(newBook);
        }
    });
});

router.delete('/:id', (req, res) => {
    const bookId = req.params.id;
    Books.findByIdAndRemove(bookId, (err, removedBook) => {
        if (err) {
            console.log(err.message);
            res.send(err.message);
        } else {
            res.json(removedBook);
        }
    });
});

router.put('/:id', (req, res) => {
    const bookId = req.params.id;
    Books.findByIdAndUpdate(bookId, req.body, {new:true}, (err, changedBook) => {
        if (err) {
            console.log(err.message);
            res.send(err.message);
        } else {
            res.json(changedBook);
        }
    });
});

module.exports = router;
