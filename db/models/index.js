const { Card, CardSchema } = require('./card.model');
const { User, UserSchema } = require('./user.model');

function setupModels(sequelize) {
  Card.init(CardSchema, Card.config(sequelize));
  User.init(UserSchema, User.config(sequelize));

}

module.exports = setupModels;

