// app.js 

const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const path = require('path');
const app = express();
const port = 5000;
const ejs = require('ejs');
const routes = require('./routes/routes');


app.use(express.static(path.join(__dirname, 'views')));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());
app.set('view engine', 'ejs')
app.use('/', routes);

// Error handler middleware
const errorHandler = (err, req, res, next) => {
  console.error(err); // Log the error for debugging purposes

  // Check if the error has a specific status code
  const statusCode = err.statusCode || 500;

  // Set the response status code
  res.status(statusCode);

  // Set the response JSON
  res.json({
    error: {
      message: err.message || 'Internal Server Error',
    },
  });
};

// Register the error handler middleware
app.use(errorHandler);


app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
