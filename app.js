// ...
const cors = require('cors')
const express =require('express');
const app = express();
const port = 5000;
const ejs = require("ejs");
const path = require("path");
const routes = require("./routes/routes");
const session = require('express-session');
const flash = require('connect-flash');
const bodyParser = require('body-parser')
app.use(express.static(path.join(__dirname, "views")));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());
app.set("view engine", "ejs");

// Set up session and flash middleware
app.use(session({
  secret: 'your-secret-key',
  resave: false,
  saveUninitialized: false
}));

app.use(flash());

// Routes setup
app.use("/", routes);

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
      message: err.message || "Internal Server Error",
    },
  });
};

// Register the error handler middleware
app.use(errorHandler);

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
