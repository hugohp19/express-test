const express = require('express');
const axios = require('axios');

const router = express.Router();

router.get('/test', (req, res) => {
    res.send("github")
});

// async / await
router.get('/user/:username', async (req, res) => {
    // destructure
    const { username } = req.params;
    const { data } = await axios.get(`https://api.github.com/search/users/${username}`);
    res.send(data)
});

module.exports = router;