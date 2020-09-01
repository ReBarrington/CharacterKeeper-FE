const db = require('../db-config.js');

module.exports = {
    getBooks,
    getCharacters,
    getRelationships
}

function getBooks() {
    return db('books')
}

// SELECT characters.name as Name, characters.description, characters.alive as Alive
// FROM characters
// where characters.book_id = 3

function getCharacters(book_id) {
    db('characters')
        .select('characters.name as Name', 'characters.description as Description', 'character.alive as Alive' )
        .where('characters.book_id', book_id)
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