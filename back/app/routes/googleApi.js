const express = require('express');
const fetch = require('node-fetch');
const router = express.Router();
const secrets = require('../../secret');

router.post('/getGeocode', (req, res) => {
  fetch(
    `https://maps.googleapis.com/maps/api/geocode/json?address=${req.body.data.location}&key=${secrets.googleApiKey}`
  )
    .then((response) => response.json())
    .then((json) => {
      console.log(json);
      return res.status(200).json({ data: json });
    });
});

module.exports = router;
