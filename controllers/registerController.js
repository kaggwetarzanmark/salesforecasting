const path = require('path');
const db = require('../routes/db_config');
const bcrypt = require('bcrypt');
const connection = db.connection;


function renderRegisterPage(req, res) {
  
  res.render('register',{name:'kyle'});
}
// Handle the POST request for registration

module.exports = {
  renderRegisterPage,
 
};
