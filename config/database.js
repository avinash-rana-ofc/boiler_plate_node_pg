const Sequelize = require('sequelize');

const sequelize = new Sequelize({
  dialect: 'postgres',
  database: 'test',
  username: 'postgres',
  password: 'root',
  host: 'localhost',
  port: 5433,
});

module.exports = sequelize;
