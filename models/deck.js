/* eslint-disable no-param-reassign */
/* eslint-disable func-names */

// This table is for housing a unique deck id
// and an id that corresponds with the user table

module.exports = function (sequelize, DataTypes) {
  const Deck = sequelize.define('Deck', {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      unique: true,
      autoIncrement: true,
    },
    owner: {
      type: DataTypes.INTEGER,
      allowNull: false,
      unique: true,
    },
  });

  Deck.associate = function (models) {
    Deck.belongsTo(models.User, {
      foreignKey: {
        allowNull: false,
      },
    });
  };

  // Deck.associate = function (models) {
  //   Deck.hasMany(models.DeckItem, {
  //     foreignKey: {
  //       allowNull: false,
  //     },
  //   });
  // };

  return Deck;
};
