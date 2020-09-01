const express = require('express');
const Books = require('./books-model.js');

const router = express.Router();

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

module.exports = router;