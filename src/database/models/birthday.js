'use strict';
module.exports = (sequelize, DataTypes) => {
  const Birthday = sequelize.define('Birthday', {
    birthday_id: {
      allowNull: false,
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    user_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    day: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    month: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    image_url: DataTypes.STRING(100)
  }, {
    timestamps: false,
    tableName: 'birthday',
  });
  Birthday.associate = ({ User }) => {
    // associations can be defined here
    Birthday.belongsTo(User, {
      foreignKey: 'user_id',
    });
  };
  return Birthday;
};