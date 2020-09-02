module.exports = {
    charactersToBook,
}

function charactersToBook(characters) {
    const result = {
        ...characters,
        character: characters
    };

    return result;
}