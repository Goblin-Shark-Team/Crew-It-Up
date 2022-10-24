const express = require('express');
const userController = require('../controllers/userController');
const validator = require('../validators/userValidator');

const router = express.Router(); // create our router

/**
 * Login and get user information
 * Middleware: ??? bcrypt + hashing ??? -> userController.login
 * Params: email, passcode
 * Body: N/A
 * Return: user profile information from database
 * Tested - working
 */
router.get('/login/:email/:passcode', 
  userController.login,
  (req, res) => {
    return res.status(200).json(res.locals.user);
  }
);

/**
 * Grab user profile information for a client. 
 * Middleware: N/A
 * Params: user_id
 * Body: N/A
 * Return: bio, contact email (pictures are grabbed separately)
 */
router.get('/profile/:user_id', 
  userController.getProfile,
  (req, res) => {
    return res.status(200).json(res.locals.user);
  }
);

/**
 * Create a new user.
 * Middleware: validation -> ??? bcrypt + hash ??? -> userController.createUser
 * Params: N/A
 * Body: passcode, email
 * Return: new user information
 */
router.post('/signup', 
  validator.checkPasscode(),
  validator.confirmPasscode(),
  validator.checkEmail(),
  validator.validate,
  userController.createUser,
  (req, res) => {
    return res.sendStatus(201); // created
  }
)

/**
 * Update: passcode
 * Middleware: validate new passcode -> ??? bcrypt + hash ??? (oldPasscode AND passcode) ->  userController.updatePasscode
 * Params: N/A
 * Body: user_id, oldPasscode (to validate), passcode 
 * Returns: 
 */
router.put('/passcode',
  validator.checkPasscode(),
  validator.confirmPasscode(),    
  validator.validate,
  userController.updatePasscode,
  (req, res) => {
    return res.status(200).json(res.locals.updated);
  }
)

/**
 * Update: email
 * Middleware: validate new email -> ??? bcrypt + hash ??? -> userController.updateEmail
 * Params: N/A
 * Body: user_id, password (to validate), email 
 * Returns: true if updated, false otherwise
 */
router.put('/email',
  validator.checkEmail(),
  validator.validate,
  userController.updateEmail,
  (req, res) => {
    return res.status(200).json(res.locals.updated);
  }
)

/**
 * Update: profile (non critical, optional info w/ no validation)
 * Middleware: ??? bcrypt + hash ??? -> userController.updateProfile
 * Params: N/A
 * Body: user_id, one, many, or all of firstname, lastname, city, state, zipcode, bio
 * Returns: 
 */
router.put('/profile', 
  userController.updateProfile,
  (req,res) => {
    return res.status(200).json(res.locals.updated);
  }
)

/**
 * Delete user -> should delete all other info
 * Middleware: ??? bcrypt + hash ??? -> userController.deleteUser
 * Params: N/A
 * Body: user_id, passcode (to authenticate deletion)
 * Returns:  
 */
router.delete('/', 
  userController.deleteUser,
    (req, res) => {
      return res.status(200).json(res.locals.deleted);
    }
)

module.exports = router;