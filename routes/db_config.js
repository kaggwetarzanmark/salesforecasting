const mysql = require('mysql2');

// Create a MySQL pool
let connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '12345678',
    database:'salesforecasting'
});

connection.connect(function(err) {
    if (err) throw err;
    console.log("Database connected!");
});
// Export the pool for reuse in other files
module.exports = connection;
