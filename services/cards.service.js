const pool = require('../libs/postgres.pool');

class CardsService {
  constructor() {
    this.cards = [];
    this.pool = pool;
    this.pool.on('error', (err) => console.error(err));
  }

  async create(data) {
    if (data) {
      this.cards.push(data);
      return true;
    }
    else {
      return false;
    }

  }

  async find() {
    const query = 'SELECT * FROM USERSCARDS';
    const rta = await this.pool.query(query);
    return rta.rows;
  }

}


module.exports = CardsService;
