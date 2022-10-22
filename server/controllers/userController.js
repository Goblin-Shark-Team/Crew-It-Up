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

/**
 * Update a user in the SQL database. 
 * Return - an object containing the updated user information
 * Params - N/A
 * req.body - user_id (string corresponding to postgres row id in username table)
 * req.body could also contain the following: 
 *  -newUsername (will have been validated)
 *  -newPassword (will have been validated)
 *  -newEmail (check if it already exists), (will have been validated)
 *  -newFirstname (will have been validated)
 *  -newLastname  (will have been validated)
 *  -newCity (validate client side)      
 *  -newState (validate client side)
 *  -newZipcode (validate client side)
 */
userController.updateUser = (req, res, next) => {
  const query = ``;

  db.query(query)
    .then(data => {
      console.log(data);
      // res.locals.user = ;
    }).catch(err => next({
      log: 'error in userController updateUser',
      message: { err: err }
    }));
}

module.exports = userController;