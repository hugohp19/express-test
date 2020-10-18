const express = require('express');
const middleware = require('../middlewares/test');

const router = express.Router();

router.get('/', (req, res) => {
    res.send("home route")
});

router.get('/about', middleware.log, (req, res) => {
    console.log("AFTER MDW");
    res.send("about");
});

module.exports = router;