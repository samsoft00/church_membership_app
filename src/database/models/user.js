import bcrypt from 'bcrypt';

module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    user_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    name: {
      type: DataTypes.STRING(200),
      allowNull: false,
      validate: {
        notEmpty: true,
      },
    },
    email: {
      type: DataTypes.STRING(100),
      unique: true,
      allowNull: false,
      validate: {
        notEmpty: true,
        isEmail: true,
      },
    },
    password: {
      type: DataTypes.STRING(100),
      allowNull: false,
      validate: {
        notEmpty: true,
      },
    },

    marital_status: DataTypes.STRING(20),
    gender: DataTypes.STRING(10),
    age_range: DataTypes.STRING(50),
    occupation: DataTypes.STRING(100),      
    
    address_1: DataTypes.STRING(100),
    address_2: DataTypes.STRING(100),
    city: DataTypes.STRING(100),
    state: DataTypes.STRING(100),
    postal_code: DataTypes.STRING(100),
    country: DataTypes.STRING(100),

    day_phone: DataTypes.STRING(100),
    mob_phone: DataTypes.STRING(100),
  }, {
    underscored: true,
    tableName: 'user',
    // timestamps: false,
  });

  User.beforeCreate(async user => {
    // eslint-disable-next-line no-param-reassign
    user.password = await user.generatePasswordHash();
  });

  User.prototype.generatePasswordHash = async function generatePasswordHash() {
    const saltRounds = 8;
    return bcrypt.hash(this.password, saltRounds);
  };

  User.prototype.validatePassword = async function validatePassword(password) {
    return bcrypt.compare(password, this.password);
  };

  User.prototype.getSafeDataValues = function getSafeDataValues() {
    const { password, ...data } = this.dataValues;
    return data;
  };  

  User.associate = ({ Birthday, WeddingAnniversary, PrayerRequest, NamingCeremony, ChildDedication }) => {
    // associations can be defined here
    User.hasOne(Birthday, {
      foreignKey: 'user_id',
    });

    User.hasOne(WeddingAnniversary, {
      foreignKey: 'user_id',
    });  
    
    User.hasMany(PrayerRequest, {
      foreignKey: 'user_id',
    });
      
    User.hasMany(NamingCeremony, {
      foreignKey: 'user_id',
    }); 
    
    User.hasMany(ChildDedication, {
      foreignKey: 'user_id',
    });    
  };
  return User;  
};