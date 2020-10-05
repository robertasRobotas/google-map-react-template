const express = require('express');
const router = express.Router();
const isLoggedIn = require('../middlewares/loginCheck');
const UserSchema = require('../models/user');

router.get('/getUser', (req, res) => {
  return res.status(200).json({ user: req.user });
});

router.get('/loginCheck', (req, res) => {
  return res.status(200).json({ message: 'ok' });
});


module.exports = router;
