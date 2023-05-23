// controllers/registerController.js
const path = require('path');
function renderRegisterPage(req, res) {
    res.sendFile(path.join(__dirname, '../public/register.html'));
  }
  
  module.exports = {
    renderRegisterPage,
  };
  