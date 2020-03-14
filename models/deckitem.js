/* eslint-disable no-param-reassign */
/* eslint-disable func-names */

// This table will just be the middleman for decks and cards
// it will have a card id that ties to the cards table
// It will also have an id that ties to the deck table
// will also have a colomn for quantity to consolidate entries.

module.exports = function (sequelize) {
  const DeckItem = sequelize.define('DeckItem', {

  });

  DeckItem.associate = function (models) {
    DeckItem.belongsTo(models.Deck, {
      foreignKey: {
        allowNull: false,
      },
    });
  };

  DeckItem.associate = function (models) {
    DeckItem.belongsTo(models.Set, {
      foreignKey: {
        allowNull: false,
      },
    });
  };

  DeckItem.associate = function (models) {
    DeckItem.belongsTo(models.Card, {
      foreignKey: {
        allowNull: false,
      },
    });
  };

  return DeckItem;
};
