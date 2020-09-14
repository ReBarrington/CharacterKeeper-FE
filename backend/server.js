const express = require('express');
const server = express();

const booksRouter = require('./src/schema/books-router');
const charactersRouter = require('./src/schema/characters-router');

server.get('/', (req, res) => {
    res.send(`<h2>Working!</h2>`);
  });

server.use(express.json()); // built-in middleware, no need to install it

//endpoints
server.use('/books', booksRouter);
server.use('/characters', charactersRouter);


module.exports = server;