const express = require('express');
const bodyParser  = require('body-parser');
const cors = require('cors')
const path = require('path')
const app = express();
const port = 5000; // Specify the port number you want to use

// Serve static files from the "public" directory
app.use(express.static(path.join(__dirname, 'public')));

// Route for serving the index.html file
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Start the server
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
