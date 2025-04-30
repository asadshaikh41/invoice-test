// config/database.js
const { Sequelize } = require("sequelize");

const sequelize = new Sequelize("asad", "root", "root", {
  host: "localhost",
  dialect: "mysql",
  logging: false
});

// Test the connection
sequelize.authenticate()
  .then(() => {
    console.log('Database connection has been established successfully.');
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err);
  });

module.exports = sequelize;