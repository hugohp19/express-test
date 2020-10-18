const express = require('express');
const axios = require('axios');

const router = express.Router();

router.get('/email-breach/:email', async (req, res) => {
    const key = process.env.HIBP_KEY;
    const { email } = req.params;
    const headers = {
        "hibp-api-key": key,
        "user-agent": "TESTRUN"
    }

    const { data } = await axios.get(`https://haveibeenpwned.com/api/v3/breachedaccount/${email}?truncateResponse=false`, { headers });

    res.send(data)
});

module.exports = router;