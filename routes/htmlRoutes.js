// Dependencies
const path = require('path');
const router = require('express').Router();

// This must be on the top than the other routers
router.get('/notes', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/notes.html'));
});

router.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/index.html'));

});
// If no matching route is found, default to the home page