var express = require('express');
var router = express.Router();
const User = require('../models/user');


// Endpoint to register user
router.post('/register', async(req, res) => {
  const { name, email, password } = req.body;
  res.json({name, email, password});
  const user = new User({name, email, password});
  try {
    await user.save();
    res.status(201).json({data: 'User saved successfully'});
  } catch (error) {
    res.status(500).json({data: error});
  }
});



module.exports = router;
