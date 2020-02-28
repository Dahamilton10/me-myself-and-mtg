/* eslint-disable no-param-reassign */
/* eslint-disable func-names */

// This table will house card info needed to re render
// the cards without the need of another api call

module.exports = function (sequelize, DataTypes) {
  const Card = sequelize.define('Card', {
    id: {
      type: DataTypes.int,
      allowNull: false,
      unique: true,
      autoIncrement: true,
    },
  });
  return Card;
};
