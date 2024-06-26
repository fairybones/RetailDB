require("dotenv").config();

const { Sequelize } = require("sequelize");

const sequelize = process.env.DB_URL
  ? new Sequelize(process.env.DB_URL)
  : new Sequelize(
      process.env.DB_NAME,
      process.env.DB_USER,
      process.env.DB_PASSWORD,
      {
        host: "localhost",
        dialect: "postgres",
        dialectOptions: {
          decimalNumbers: true,
        },
      }
    );

// Test the connection
sequelize.authenticate()
.then(() => {
  console.log('Sequelize connection is ready!')
})
.catch(err => {
  console.error('Unable to connect:', err)
});

module.exports = sequelize;
