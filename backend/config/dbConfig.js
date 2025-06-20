const mysql = require('mysql2');

// Create a connection to the database
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',          // Your MySQL username
    password: '141962',  // Your MySQL password
    database: 'leave_app_db',  // Database name
});

connection.connect((err) => {
    if (err) throw err;
    console.log('Database connected!');
});

module.exports = connection;
