// Set up requirements
const express =require("express");
const path = require("path");
const util = require("util");
const fs = require("fs");


// Set up reading and writing files
const readFile =util.promisify(fs.readFile);
const writefile =util.promisify(fs.writeFile);


//Setting up Express
const app = express();
const PORT = process.env.PORT || 3000;
app.use(express.urlencoded({
    extended: true
}));
app.use(express.json());
app.use(express.static(__dirname + '/public'));


// HTML Routes
// Home Page Route
app.get("/", function (req, res) {

    
}