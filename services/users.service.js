const { models } = require('../libs/sequelize');

class UsersService {
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
    const rta = await models.User.findAll();
    return rta;
  }

}

module.exports = UsersService;
