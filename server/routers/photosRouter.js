const express = require('express');
const photosController = require('../controllers/photosController');

// do we need validation for photos?

const router = express.Router();

router.get('/:user_id', (req, res) => {
  return res.send(200);
})

router.get('/:city', (req, res) => {
  
})

module.exports = router;