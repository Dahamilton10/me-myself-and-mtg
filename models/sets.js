/* eslint-disable no-param-reassign */
/* eslint-disable func-names */

// This table will set info

module.exports = function (sequelize, DataTypes) {
  const Set = sequelize.define('Set', {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    code: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      primaryKey: true,
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

  Set.associate = function (models) {
    Set.hasMany(models.Card, {
      foreignKey: {
        allowNull: false,
      },
    });
  };

  Set.associate = function (models) {
    Set.hasMany(models.DeckItem, {
      foreignKey: {
        allowNull: false,
      },
    });
  };

  return Set;
};
