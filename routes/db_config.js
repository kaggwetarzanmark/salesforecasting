const mysql = require('mysql2');

// Create a MySQL pool
const pool = mysql.createPool({
  host: 'localhost',      // Replace with your MySQL server host
  user: 'root',           // Replace with your MySQL username
  password: '12345678',   // Replace with your MySQL password
  database: 'project2'    // Replace with your MySQL database name
});

// Get a connection from the pool
pool.getConnection((error, connection) => {
  if (error) {
    console.error('Error getting connection from MySQL pool: ', error);
    return;
  }
  console.log('Connected to MySQL server');

  // Release the connection back to the pool
  connection.release();
});

// Export the pool for reuse in other files
module.exports = pool;

