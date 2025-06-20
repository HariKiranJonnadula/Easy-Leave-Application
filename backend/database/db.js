// database/db.js

const { Sequelize } = require('sequelize');

// Create a connection to the MySQL database
const sequelize = new Sequelize('leave_app_db', 'root', '141962', {
    host: 'localhost',
    dialect: 'mysql2',
});

// Test the database connection
sequelize.authenticate()
    .then(() => console.log('Database connected successfully.'))
    .catch((err) => console.error('Unable to connect to the database:', err));

module.exports = sequelize;
