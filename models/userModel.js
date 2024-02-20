const { Model } = require('sequelize');
const bcrypt = require('bcrypt');

module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    static associate(models) {
      // Any associations with other models can be defined here
    }
  }

  User.init(
    {
      // Define your model attributes here
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      userName: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
      },
      // Add more attributes as needed
      firstName: {
        type: DataTypes.STRING,
        allowNull : false
      },
      lastName: {
        type: DataTypes.STRING,
        allowNull : false
      },
      email: {
        type: DataTypes.STRING,
        unique: true,
        allowNull: false,
        set (value) {
          this.setDataValue('email', value?.trim())
        }
      },
      password: {
        type: DataTypes.STRING,
        allowNull: false,
        set (value) {
          this.setDataValue('password', value ? bcrypt.hashSync(value, 12) : null)
        }
      },
      phone: {
        type: DataTypes.STRING,
        allowNull : false
      },
      role: {
        type: DataTypes.STRING
      },
      countryId: {
        type: DataTypes.STRING,
        allowNull: true
      },
      createdAt: {
        allowNull: false,
        type: DataTypes.DATE
      },
      updatedAt: {
        allowNull: false,
        type: DataTypes.DATE
      }
    },
    {
      sequelize,
      modelName: 'users',
    }
  );

  return User;
};
