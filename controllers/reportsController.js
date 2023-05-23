const path = require('path');
function renderReportsPage(req, res) {
    res.sendFile(path.join(__dirname, '../public/reports.html'));
  }
  
  module.exports = {
    renderReportsPage,
  };