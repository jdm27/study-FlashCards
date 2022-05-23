const express = require('express');
const cards = require('./cards.router');


function routerApi(app) {
  const router = express.Router();
  app.use('/api', router);
  router.use('/cards', cards);
}


module.exports = routerApi;
