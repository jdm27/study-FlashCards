const express = require('express');
const CardsService = require('./../services/cards.service');


const service = new CardsService();

const router = express.Router();


router.get('/', async (req, res) => {
  const cards = await service.find();
  res.json(cards);
});






module.exports = router;


