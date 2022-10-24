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
      res.locals.user = {};
      for(const key in data.rows[0]){
        if(!(key === 'passcode' || key === 'email')){
          res.locals.user[key] = data.rows[0][key];
        }
      }
      if(Object.keys(res.locals.user).length === 0) res.locals.user = false;
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
  const query = `SELECT bio, email FROM users WHERE users._id=${req.params.user_id}`; //update query(ies)

  db.query(query)
    .then(data => {
      res.locals.user = data.rows[0];
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
  const query = `INSERT INTO users(passcode, email) VALUES('${req.body.passcode}', '${req.body.email}')`; //update query(ies)

  db.query(query)
    .then(data => {
      console.log(data.rows);
      return next();
    }).catch(err => {
      if(err.routine = '_bt_check_unique'){
        res.locals.user = false;
        return next();
      }
      return next({
        log: 'error in userController createUser',
        message: { err: err }
    })});
};

/**
 * Update passcode
 * Params: N/A
 * Body: user_id
 * Returns: 
 */
userController.updatePasscode = (req, res, next) => {
  console.log('in userController updatePasscode')
  const query = `UPDATE users SET passcode = '${req.body.passcode}' WHERE users._id = ${req.body.user_id} AND passcode = '${req.body.oldPasscode}'`; //update query(ies)
  db.query(query)
    .then(data => {
      res.locals.updated = data['rowCount'] === 1;
      console.log(res.locals.updated);
      return next();
    }).catch(err => next({
      log: 'error in userController updatePasscode',
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
      res.locals.updated = data['rowCount'] === 1;
      console.log(res.locals.updated);
      return next();
    }).catch(err => next({
      log: 'error in userController updateEmail',
      message: { err: err }
    }));
};

/**
 * Update option user information (profile)
 * Params: N/A
 * Body: could contain firstname, lastname, city, state, zip_code, bio
 * Returns: 
 */
userController.updateProfile = (req, res, next) => {
  console.log('in userController updateProfile');
  let choices = ``;
  for(const key in req.body) {
    if(key === 'firstname' || key === 'lastname' || key === 'city' || key === 'state' || key === 'bio' || key === 'zip_code') {
      choices += ` ${key} = '${req.body[key]}',`; 
    } 
  }
  choices = choices.substring(0, choices.length - 1);
  const query = `UPDATE users SET${choices} WHERE users._id = ${req.body.user_id} AND passcode = '${req.body.passcode}'`;
  db.query(query)
    .then(data => {
      res.locals.updated = data['rowCount'] === 1;
      return next();
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
  const query = `DELETE FROM users WHERE users._id=${req.body.user_id} AND passcode='${req.body.passcode}'`; //update query(ies)
  
  db.query(query)
    .then(data => {
      res.locals.deleted = data['rowCount'] === 1;
      return next();
    }).catch(err => next({
      log: 'error in userController deleteUser',
      message: { err: err }
    }));
}
module.exports = userController;