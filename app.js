// BASE SETUP

// ======================================

// Call Packages
const express = require('express'); // call express
const morgan = require('morgan'); // log all requests to the console
const bodyParser = require('body-parser'); // used to grab information from POST requests
const app = express(); // define our app using express
app.use(morgan('dev'));

// Parse incoming requests data (https://github.com/expressjs/body-parser)
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: false
}));

// a default catch-all route
app.get('*', (req, res) => res.status(200).send({
  message: 'Welcome to the homepage',
}));

module.exports = app;