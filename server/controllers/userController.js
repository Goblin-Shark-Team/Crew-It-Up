// connect to database with import
const db = require('../models/models');

const userController = {};

/**
 * Attempt a login by retrieving information in an SQL database.
 * Return - an object on res.locals.user if the user exists
 *          otherwise, an empty object
 * Params - email, passcode (hashed? string)
 * req.body - N/A
 */
userController.login = (req, res, next) => {
  console.log('in userController login');
  const query = `SELECT * FROM users WHERE email = '${req.params.email}' AND passcode = '${req.params.passcode}'`; //update query(ies)
  db.query(query)
    .then(data => {
      res.locals.user = data.rows[0];
      return next();
    }).catch(err => next({
        log: 'error in userController login',
        message: { err: err }
    }));
};
 
/**
 * Grab a user's profile information from a user_id to show to a client.
 * Return - bio, contact email
 * Body: N/A
 * Params - user_id (key to a row)
 */
userController.getProfile = (req, res, next) => {
  console.log('in userController getProfile');
  const query = ``; //update query(ies)

  db.query(query)
    .then(data => {
      // res.locals.user = ;
      return next();
    }).catch(err => next({
        log: 'error in userController getProfile',
        message: { err: err }
    }));
};

/**
 * Create a new user in the SQL database
 * Return - an object containing the new user information
 * Params - N/A
 * req.body - password (hashed? string), email (string)
 * ****** Email must be unique in DB ******************
 */
userController.createUser = (req, res, next) => {
  console.log('in userController createUser')
  const query = ``; //update query(ies)

  db.query(query)
    .then(data => {
      console.log(data);
      // res.locals.user = ;
      return next();
    }).catch(err => next({
      log: 'error in userController createUser',
      message: { err: err }
    }));
};

/**
 * Update password
 * Params: N/A
 * Body: user_id
 * Returns: 
 */
userController.updatePassword = (req, res, next) => {
  console.log('in userController updatePassword')
  const query = ``; //update query(ies)
  db.query(query)
    .then(data => {
      console.log(data);
      //do something?
    }).catch(err => next({
      log: 'error in userController updatePassword',
      message: { err: err }
    }));
};

/**
 * Update email - EMAIL MUST BE UNIQUE IN DB
 * Params: N/A
 * Body: user_id
 * Returns: 
 */
userController.updateEmail = (req, res, next) => {
  console.log('in userController updateEmail')
  const query = `UPDATE users SET email = '${req.body.email}' WHERE users._id = '${req.body.user_id}'`; //update query(ies)
  db.query(query)
    .then(data => {
      console.log(data);
      //do something?
    }).catch(err => next({
      log: 'error in userController updateEmail',
      message: { err: err }
    }));
};

/**
 * Update option user information (profile)
 * Params: N/A
 * Body: could contain firstname, lastname, city, state, zipcode, bio
 * Returns: 
 */
 userController.updateProfile = (req, res, next) => {
  console.log('in userController updateProfile')
  const query = ``; //update query(ies)
  db.query(query)
    .then(data => {
      console.log(data);
      //do something?
    }).catch(err => next({
      log: 'error in userController updateProfile',
      message: { err: err }
    }));
};


/**
 * Delete user and all associated child content (see postgres on delete cascade)
 * Params: N/A
 * Body: user_id, password (hashed? string) 
 * Returns: 
 */
userController.deleteUser = (req, res, next) => {
  console.log('in userController deleteUser')
  const query = ``; //update query(ies)
  
  db.query(query)
    .then(data => {
      console.log(data);
      //do something?
    }).catch(err => next({
      log: 'error in userController deleteUser',
      message: { err: err }
    }));
}
module.exports = userController;