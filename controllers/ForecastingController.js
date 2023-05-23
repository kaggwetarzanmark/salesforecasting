const path = require('path');
function renderforecastingPage(req, res) {
    res.sendFile(path.join(__dirname, '../public/Forecasting.html'));
  }
  
  module.exports = {
    renderforecastingPage,
  };