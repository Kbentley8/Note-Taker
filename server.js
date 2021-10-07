// Dependencies
const express= require('express');

// Point Server to route files 
const apiRoutes = require('./routes/apiRoutes');
const htmlRoutes = require('./routes/htmlRoutes');

// Create an express server
const app = express();

// Setting PORT
const PORT = process.env.PORT || 3001;

// Parse incoming string or array data
app.use(express.urlencoded({ extended: true }));

// Parse incoming JSON data
app.use(express.json());