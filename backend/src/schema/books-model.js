const db = require('../db-config.js');
const mappers = require('./mappers.js')

module.exports = {
    getBooks,
    getBookById,
    getCharacters,
    getRelationships,
    addBook,
}

function getBooks() {
    return db('books')
}

function getBookById(id) {
    return db('books')
        .where('books.id', id)

}

// SELECT characters.name as Name, characters.description, characters.alive as Alive
// FROM characters
// where characters.book_id = 3

function getCharacters(bookId) {
    return db('characters')
        .select('characters.name as Name', 'characters.description as Description' )
        .where('characters.book_id', bookId)
        // .then(characters => characters.map(character => mappers.charactersToBook(characters)))
}

// SELECT characters.name, relationships.relationship_type, characters.description
// FROM relationships
// join characters on relationships.relatives_id = characters.id 
// join books on relationships.book_id = books.id
// where relationships.character_id = 1

function getRelationships(character_id) {
    db('relationships')
        .select('characters.name as Name', 'characters.relationship_type as Relationship', 'characters.description as Description')
        .join('Characters', 'relationships.relatives_id', 'characters.id')
        .join('books', 'relationships.book_id', 'books.id')
        .where('relationships.character_id', character_id)
}

function addBook(book) {
    return db('books')
        .insert(book, 'id')
        .then(([id]) => getBooks())
}