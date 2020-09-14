const express = require('express');
const server = express();

// routers
const booksRouter = require('./src/schema/books-router');

server.get('/', (req, res) => {
    res.send(`<h2>Working!</h2>`);
  });

server.use(express.json()); // built-in middleware, no need to install it

//endpoints
server.use('/books', booksRouter);

module.exports = server;