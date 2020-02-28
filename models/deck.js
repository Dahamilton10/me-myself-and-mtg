/* eslint-disable no-param-reassign */
/* eslint-disable func-names */

// This table is for housing a unique deck id
// and an id that corresponds with the user table

module.exports = function (sequelize, DataTypes) {
  const Deck = sequelize.define('Deck', {
    id: {
      type: DataTypes.int,
      allowNull: false,
      unique: true,
      autoIncrement: true,
    },
  });
  return Deck;
};
