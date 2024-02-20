const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const UserModel = require('./userModel');

const User = UserModel(sequelize, DataTypes);

module.exports = {
  User,
};
