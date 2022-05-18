const express = require('express');
const deckOfCards = require('./deckOfCards.router');


function routerApi(app) {
  const router = express.Router();
  app.use('/api', router);
  router.use('/decks', deckOfCards);
}


module.exports = routerApi;
