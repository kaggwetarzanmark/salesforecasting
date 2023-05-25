// routes/routes.js

const express = require('express');
const router = express.Router();
const loginController = require('../controllers/loginController');
const registerController = require('../controllers/registerController');
const reportsController = require('../controllers/reportsController');
const addController = require('../controllers/addController');
const ForecastingController = require('../controllers/ForecastingController');
router.get('/', loginController.renderLoginPage);
router.get('/register', registerController.renderRegisterPage);
router.get('/reports', reportsController.renderReportsPage);
router.get('/add', addController.renderaddPage);
router.get('/forecast', ForecastingController.renderforecastingPage);
// router.post('/register', registerController.registerUser);
module.exports = router;
