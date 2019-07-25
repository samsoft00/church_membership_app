'use strict';
module.exports = (sequelize, DataTypes) => {
  const NamingCeremony = sequelize.define('NamingCeremony', {
    naming_ceremony_id:{
      allowNull: false,
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    user_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },    
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: true,
      },
    },
    family_name: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: true,
      },      
    },
    day: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    month: {
      type: DataTypes.INTEGER,
      allowNull: false
    },

    address_1: DataTypes.STRING(100),
    address_2: DataTypes.STRING(100),
    city: DataTypes.STRING(100),
    state: DataTypes.STRING(100)

  }, {
    underscored: true,
    tableName: 'name_ceremony',
  });
  NamingCeremony.associate = ({ User }) => {
    // associations can be defined here
    NamingCeremony.belongsTo(User, {
      foreignKey: 'user_id',
    });    
  };
  return NamingCeremony;
};