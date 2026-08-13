# Sales Forecasting System

A web app for recording sales data and generating sales forecasts.
Built as my final year project.

## What it does

- User registration and login
- Add, view and manage sales records
- Generates a forecast from past sales data
- Flash messages for success and error feedback

## Built with

- Node.js and Express
- EJS for the views
- MySQL (mysql2)
- Passport.js and bcrypt for authentication
- express-session and connect-flash

## Folder structure

- controllers/ - request handlers and database queries
- routes/ - app routes
- views/ - EJS templates and css
- app.js - entry point

## Running it locally

1. Clone the repo

    git clone https://github.com/kaggwetarzanmark/salesforecasting.git
    cd salesforecasting

2. Install dependencies

    npm install

3. Create a .env file and add your mysql details

    DB_HOST=localhost
    DB_USER=root
    DB_PASSWORD=your_password
    DB_NAME=salesforecasting

4. Create the database in MySQL and set up the tables

5. Start the server

    npm start

The app runs on http://localhost:5000

## Things I would add if I continued

- Charts to display the forecast results
- Export reports to excel or pdf
- Admin and normal user roles
