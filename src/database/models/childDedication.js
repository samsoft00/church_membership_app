'use strict';
module.exports = (sequelize, DataTypes) => {
  const ChildDedication = sequelize.define('ChildDedication', {
    child_dedication_id: {
      allowNull: false,
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,      
    },
    user_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },    
    child_name: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: true,
      },
    },
    month: {
      type: DataTypes.INTEGER,
      allowNull: false
    }
  }, {
    underscored: true,
    tableName: 'child_dedication'
  });
  ChildDedication.associate = ({ User }) => {
    // associations can be defined here
    ChildDedication.belongsTo(User, {
      foreignKey: 'user_id',
    });    
  };
  return ChildDedication;
};