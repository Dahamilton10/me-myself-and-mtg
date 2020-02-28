/* eslint-disable no-param-reassign */
/* eslint-disable func-names */

// This table will just be the middleman for decks and cards
// it will have a card id that ties to the cards table
// It will also have an id that ties to the deck table
// will also have a colomn for quantity to consolidate entries.

module.exports = function (sequelize, DataTypes) {
  const DeckItem = sequelize.define('DeckItem', {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      unique: true,
      autoIncrement: true,
    },
  });
  return DeckItem;
};
