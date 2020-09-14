const express = require('express');
const Books = require('./books-model.js');
const mappers = require('./mappers.js');

const router = express.Router();

// retrieve list of books
router.get('/', (req, res) => {
    Books.getBooks()
    .then(books => {
        res.status(200).json(books)
    })
    .catch(err => {
        console.log(err)
        res.status(500).json({ message: 'Failed to get books'})
    });
})

// add new book, return full list
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

// see one book by id
router.get('/:id', (req, res) => {
    Books.getBookById(req.params.id)
    .then((book) => {
        if (book) {
            res.status(200).json(book)
        } else {
            res.status(404).json({ message: "Book not found." })
        }
    })
    .catch(err => {
        console.log(err)
        res.status(500).json({ message: "Error retrieving the book."})
    })
})


module.exports = router;