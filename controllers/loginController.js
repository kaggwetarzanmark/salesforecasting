const path = require('path');

function renderLoginPage(req, res) {
  res.sendFile(path.join(__dirname, '../public/login.html'));
}

module.exports = {
  renderLoginPage,
};
