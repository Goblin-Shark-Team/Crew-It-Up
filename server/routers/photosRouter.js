const express = require('express');
const photosController = require('../controllers/photosController');

// do we need validation for photos?

const router = express.Router();

router.get('/user/:user_id', 
  photosController.getUserPhotos,
  (req, res) => { 
    return res.status(200).json(res.locals.photos);
})

router.get('/city/:city', 
  photosController.getCityPhotos,
  (req, res) => {
    return res.status(200).json(res.locals.photos);
})


router.post('/', 
  // need to perform url validation 
  photosController.uploadUserPhoto,
  (req, res) => {
    return res.status(200).json(res.locals.uploaded);
})



module.exports = router;