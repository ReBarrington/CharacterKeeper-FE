const express = require('express');
const Books = require('./books-model.js');

const router = express.Router();

// retrieve list of books
router.get('/', (req, res) => {
    Books.getBooks()
    .then(books => {
        res.status(200).json(books)
    })
    .catch(err => {
        console.log(err)
        res.status(500).json({ message: 'Failed to get Books'})
    });
})

// add new book
router.post('/', (req, res) => {
    Books.addBook(req.body)
        .then(book => {
            res.json(book)
        })
        .catch(err => {
            console.log(err)
            res.status(500).json({ message: "Failed to post new book." })
        })
})


module.exports = router;