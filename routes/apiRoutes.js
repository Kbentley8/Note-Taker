// Dependencies
const router = require('express').Router();

const saveData = require('../db/saveData');

//GET request
router.get('/notes', function (req, res) {
    saveData
        .retrieveNotes()
        .then(notes => res.json(notes))
        .catch(err => res.status(500).json(err));
});