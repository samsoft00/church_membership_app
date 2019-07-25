'use strict';
module.exports = (sequelize, DataTypes) => {
  const PrayerRequest = sequelize.define('PrayerRequest', {
    prayer_request_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    user_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },    
    type: {
      type: DataTypes.STRING,
      allowNull: false
    },
    message: {
      type: DataTypes.STRING,
      allowNull: false
    }
  }, {
    underscored: true,
    tableName: 'prayer_request',
  });
  PrayerRequest.associate = ({ User }) => {
    // associations can be defined here
    PrayerRequest.belongsTo(User, {
      foreignKey: 'user_id',
    });    
  };
  return PrayerRequest;
};