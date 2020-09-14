const db = require('../db-config.js');
const mappers = require('./mappers.js')

module.exports = {
    getBooks,
    getBookById,
    addBook,
    update
}

function getBooks() {
    return db('books')
}

function getBookById(id) {
    return db('books')
        // .join('Characters', 'characters.book_id', 'books.id')
        .where('books.id', id)
        // .then(characters => characters.map(character => mappers.charactersToBook(character)))
}

function addBook(book) {
    return db('books')
        .insert(book, 'id')
        .then(([id]) => getBooks())
}

function update(id, changes) {
    return db('characters')
        .where('id', id)
        .update(changes)
        .then(count => (count > 0 ? getCharacterbyId(id) : null));
}