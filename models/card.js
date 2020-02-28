/* eslint-disable no-param-reassign */
/* eslint-disable func-names */

// This table will house card info needed to re render
// the cards without the need of another api call

module.exports = function (sequelize, DataTypes) {
  const Card = sequelize.define('Card', {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    multiverseID: {
      type: DataTypes.INTEGER,
      allowNull: false,
      unique: true,
      autoIncrement: true,
    },
    manaCost: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: false,
    },
    cmc: {
      type: DataTypes.INTEGER,
      allowNull: false,
      unique: false,
    },
    colors: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: false,
    },
    type: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: false,
    },
    types: {
      type: DataTypes.STRING,
      allowNull: true,
      unique: false,
    },
    subtypes: {
      type: DataTypes.STRING,
      allowNull: true,
      unique: false,
    },
    rarity: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: false,
    },
    text: {
      type: DataTypes.TEXT,
      allowNull: false,
      unique: false,
    },
    power: {
      type: DataTypes.INTEGER,
      allowNull: true,
      unique: false,
    },
    toughness: {
      type: DataTypes.INTEGER,
      allowNull: true,
      unique: false,
    },
    source: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: false,
    },
    imageURL: {
      type: DataTypes.STRING,
      allowNull: true,
      unique: false,
    },
    set: {
      type: DataTypes.STRING,
      allowNull: true,
      unique: false,
    },
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      unique: true,
    },
  });

  Card.associate = function (models) {
    Card.hasMany(models.DeckItem, {
      foreignKey: {
        allowNull: false,
      },
    });
  };

  return Card;
};
