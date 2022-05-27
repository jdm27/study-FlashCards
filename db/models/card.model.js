
const { Model, DataTypes, Sequelize } = require('sequelize');


const CARD_TABLE = 'cardsDOS';

const CardSchema = {
  id: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: DataTypes.INTEGER
  },
  term: {
    allowNull: false,
    type: DataTypes.STRING,
    Unique: true
  },
  definition: {
    allowNull: true,
    type: DataTypes.STRING,
  },
  createdAt: {
    allowNull: false,
    type: DataTypes.DATE,
    field: 'create_at',
    defaultValue: Sequelize.NOW
  }

}

class Card extends Model {

  static association() {
    // associate
  }

  static config(sequelize) {
    return {
      sequelize,
      tableName: CARD_TABLE,
      modelName: 'Card',
      timestamps: false
    }
  }

}

module.exports = { CARD_TABLE, CardSchema, Card }


