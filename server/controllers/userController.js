// connect to database with import
const db = require('../models/models');

const userController = {};

/**
 * Get a user from the SQL database. 
 * Return - an object on res.locals.user if the user exists
 *          otherwise, an empty object
 * Params - username, password
 * req.body - N/A
 */
userController.getUser = (req, res, next) => {
  const query = ``;

  db.query(query)
    .then(data => {
      // res.locals.user = ;
      return next();
    }).catch(err => next({
        log: 'error in userController getUser',
        message: { err: err }
    }));
}

/**
 * Post a user to the SQL database.
 * Return - an object containing the new user information
 * Params - N/A
 * req.body - username (string), password (string), email (string)
 */
userController.postUser = (req, res, next) => {
  const query = ``;


  db.query(query)
    .then(data => {
      console.log(data);
      // res.locals.user = ;
      return next();
    }).catch(err => next({
      log: 'error in userController postUser',
      message: { err: err }
    }));
}

module.exports = userController;