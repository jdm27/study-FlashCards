const express = require('express');
const UsersService = require('./../services/users.service');

const service = new UsersService();

const router = express.Router();

router.get('/', async (req, res) => {
  const users = await service.find();
  res.json(users);
});


module.exports = router;
