// connect to database with import
const db = require('../models/models');

const userController = {};

/**
 * Attempt a login by retrieving information in an SQL database.
 * Return - an object on res.locals.user if the user exists
 *          otherwise, an empty object
 * Params - email, password (hashed? string)
 * req.body - N/A
 */
userController.login = (req, res, next) => {
  console.log('in userController login');
  const query = `SELECT * FROM users WHERE email = ${req.body.email} AND password = ${req.body.passcode}`; //update query(ies)

  db.query(query)
    .then(data => {
      res.locals.user = data;
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
  const query = `SELECT bio, email FROM users WHERE users._id = '${req.params.user_id}'`; //update query(ies)

  db.query(query)
    .then(data => {
      res.locals.profile = data.rows[0];
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
 * req.body - passcode (hashed? string), email (string)
 * ****** Email must be unique in DB ******************
 */
userController.createUser = (req, res, next) => {
  console.log('in userController createUser')
  const query = `INSERT INTO users (email, passcode) VALUES ('${req.body.email}','${req.body.passcode}')`; //update query(ies)

  db.query(query)
    .then(data => {
      console.log(data);
      res.locals.user = data;
      return next();
    }).catch(err => next({
      log: 'error in userController createUser',
      message: { err: err }
    }));
};

/**
 * Check for passcode match, update passcode
 * Params: N/A
 * Body: user_id, oldPasscode, passcode (new one, validated)
 * Returns: 
 */
userController.updatePasscode = (req, res, next) => {
  console.log('in userController updatePasscode')
  const query = `UPDATE users SET passcode = '${req.body.passcode}' WHERE users._id = '${req.body.user_id}' AND passcode = '${req.body.oldPasscode}'`; //update query(ies)
  db.query(query)
    .then(data => {
      console.log(data);
      next();
    }).catch(err => next({
      log: 'error in userController updatePasscode',
      message: { err: err }
    }));
};

/**
 * Update email 
 * Params: N/A
 * Body: user_id, passcode (check this to authenticate)
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
 * Body: could contain firstname, lastname, city, state, zipcode, bio, passcode (to authenticate)
 * Returns: 
 */
 userController.updateProfile = (req, res, next) => {
  console.log('in userController updateProfile')
  const query = `UPDATE users SET firstname = '${req.params.firstname}', lastname = '${req.params.lastname}', city = '${req.params.city}', state = '${req.params.state}', zipcode = '${req.params.zipcode}', bio = '${req.params.bio}' WHERE _id = '${req.params.users_id}' AND passcode = '${req.params.passcode}'`; //update query(ies)
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
 * Body: user_id, passcode (hashed? string) 
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