const { models } = require('../libs/sequelize');


class CardsService {
  constructor() { }

  async create(data) {
    if (data) {
      return data;
    }
    else {
      return false;
    }

  }

  async find() {
    const rta = await models.Card.findAll();
    return rta;
  }

}


module.exports = CardsService;
