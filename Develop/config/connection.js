// Changed formatting
const Sequelize = require('sequelize');
require('dotenv').config();

// Changed this to make sure the dotenv package works 
const sequelize = new Sequelize(
  process.env.DB_NAME,
  process.env.DB_USER,
  process.env.DB_PASSWORD,
  {
    host: 'localhost',
    dialect: 'mysql',
    port: 3306,
  }
);

module.exports = sequelize;
