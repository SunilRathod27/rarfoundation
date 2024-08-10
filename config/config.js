require('dotenv').config();

module.exports = {
  development: {
    username: process.env.SQL_USER,
    password: process.env.SQL_PASSWORD,
    database: process.env.SQL_DATABASE,
    host: process.env.SQL_HOST,
    port: process.env.DB_PORT || 3306,  // Default to 3306 for MySQL
    dialect: process.env.DB_DIALECT || 'mysql'
  },
  test: {
    username: process.env.SQL_USER,
    password: process.env.SQL_PASSWORD,
    database: process.env.SQL_DATABASE,
    host: process.env.SQL_HOST,
    port: process.env.DB_PORT || 3306,  // Default to 3306 for MySQL
    dialect: process.env.DB_DIALECT || 'mysql'
  },
  production: {
    username: process.env.SQL_USER,
    password: process.env.SQL_PASSWORD,
    database: process.env.SQL_DATABASE,
    host: process.env.SQL_HOST,
    port: process.env.DB_PORT || 3306,  // Default to 3306 for MySQL
    dialect: process.env.DB_DIALECT || 'mysql'
  }
};
