// connect to database with import
const db = require('../models/models');

const photosController = {};

/**
 * Attempt to pull all photos uploaded by a specific 
 * Return - an array of objects - urls from this user, or false if none
 * Params - user_id
 * Body - N/A
 */
photosController.getUserPhotos = (req, res, next) => {
  console.log('in photosController getUserPhotos')
  const query = `SELECT url FROM photos WHERE user_id = ${req.params.user_id}`;
  db.query(query)
    .then(data => {
      res.locals.photos = data.rows;
      if(!res.locals.photos.length) res.locals.photos = false;
      return next();
    }).catch(err => next({
        log: 'error in photosController getUserPhotos',
        message: { err: err }
    }));
}

/**
 * Upload a photo from a user
 * Return - true if uploaded, false otherwise
 * Params - user_id, url
 * Body - N/A
 */
 photosController.uploadUserPhoto = (req, res, next) => {
  console.log('in photosController uploadUserPhoto')
  const query = `INSERT INTO photos(user_id, url) VALUES(${req.body.user_id}, '${req.body.url}')`;
  db.query(query)
    .then(data => {
      res.locals.uploaded = data['rowCount'] === 1;
      return next();
    }).catch(err => next({
        log: 'error in photosController uploadUserPhoto',
        message: { err: err }
    }));
}

/**
 * Return 9 photos from users of a specific city
 * Return - 9 objects with a url and user_id from users of a specific city
 * Params - city name
 */
photosController.getCityPhotos = (req, res, next) => {
  console.log('in photosController getCityPhotos');
  const query = `SELECT u.city, u._id, p.url FROM users u LEFT OUTER JOIN photos p ON p.user_id = u._id WHERE u.city = '${req.params.city}' ORDER BY RANDOM() LIMIT 9`;
  db.query(query)
    .then(data => {
      res.locals.photos = data.rows;
      return next();
    }).catch(err => next({
        log: 'error in photosController uploadUserPhoto',
        message: { err: err }
    }));
}
module.exports = photosController;