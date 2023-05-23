const path = require('path');
function renderaddPage(req, res) {
    res.sendFile(path.join(__dirname, '../public/add.html'));
  }
  
  module.exports = {
    renderaddPage,
  };