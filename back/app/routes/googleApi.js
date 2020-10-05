const express = require('express');
const fetch = require('node-fetch');
const router = express.Router();

router.get('/getGeocode', (req, res) => {
  // fetch(`https://maps.googleapis.com/maps/api/geocode/json?address=${location}&key=${secrets.googleApiKey}`)
  //   .then(res => res.text())
  //   .then(body => console.log(body));
  console.log(req);
  return res.status(200).json({ user: 'ok' });
});

module.exports = router;
