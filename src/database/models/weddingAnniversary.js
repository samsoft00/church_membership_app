'use strict';
module.exports = (sequelize, DataTypes) => {
  const WeddingAnniversary = sequelize.define('WeddingAnniversary', {
    wedding_aniniversary_id:{
      allowNull: false,
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    user_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    day: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    month: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    message: DataTypes.STRING(200),
    wedding_picture: DataTypes.STRING,
    partner_phone: DataTypes.STRING(100),
    partner_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
    }
  }, {
    underscored: true,
    tableName: 'wedding_aniniversary',
    timestamps: false    
  });
  WeddingAnniversary.associate = ({ User }) => {
    // associations can be defined here
    WeddingAnniversary.belongsTo(User, {
      foreignKey: 'user_id',
    });
    
  };
  return WeddingAnniversary;
};