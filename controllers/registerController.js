const path = require('path');
const db = require('../routes/db_config');
const bcrypt = require('bcrypt');

function renderRegisterPage(req, res) {
  res.sendFile(path.join(__dirname, '../public/register.html'));
}

// function registerUser(req, res) {
//   const { username, email, password } = req.body;

//   // Perform necessary validation and processing of the form data
//   // For example, you can hash the password using bcrypt before storing it in the database
//   const hashedPassword = bcrypt.hashSync(password, 10);

//   // Insert the user into the database
//   const query = 'INSERT INTO users (username, email, password) VALUES (?, ?, ?)';
//   db.query(query, [username, email, hashedPassword], (error, results) => {
//     if (error) {
//       console.error('Error registering user: ', error);
//       return;
//     }
//     // Handle successful registration
//     res.send('Registration successful!');
//   });
// }

module.exports = {
  renderRegisterPage,
  // registerUser,
};
