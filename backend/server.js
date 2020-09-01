const express = require('express');
const server = express();

const charactersRouter = require('./schema/characters-router.js');

server.get('/', (req, res) => {
    res.send(`<h2>Sprint!</h2>`);
  });

server.use(express.json()); // built-in middleware, no need to install it

//endpoints
server.use('/api/characters', charactersRouter);


module.exports = server;