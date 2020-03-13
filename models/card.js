/* eslint-disable no-param-reassign */
/* eslint-disable func-names */

// This table will house card info needed to re render
// the cards without the need of another api call

module.exports = function (sequelize, DataTypes) {
  const Card = sequelize.define('Card', {
    id: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: false,
    },
    type: {
      type: DataTypes.STRING,
      allowNull: true,
      unique: false,
    },
    manaCost: {
      type: DataTypes.STRING,
      allowNull: true,
      unique: false,
    },
    cmc: {
      type: DataTypes.STRING,
      allowNull: true,
      unique: false,
    },
    createdAt: {
      allowNull: false,
      type: DataTypes.DATE,
      defaultValue: sequelize.literal('CURRENT_TIMESTAMP'),
    },
    updatedAt: {
      allowNull: false,
      type: DataTypes.DATE,
      defaultValue: sequelize.literal('CURRENT_TIMESTAMP'),
    },
  });

  Card.associate = function (models) {
    Card.hasMany(models.DeckItem, {
      foreignKey: {
        allowNull: false,
      },
    });
  };

  Card.associate = function (models) {
    Card.belongsTo(models.Set, {
      foreignKey: {
        allowNull: false,
      },
    });
  };

  return Card;
};
