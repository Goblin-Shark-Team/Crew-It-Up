const express = require('express');
const userController = require('../controllers/userController');
const validator = require('../validators/userValidator');

const router = express.Router(); // create our router

/**
 * Login and get user information
 * Middleware: ??? bcrypt + hashing ??? -> userController.login
 * Params: email, password
 * Body: N/A
 * Return: user profile information from database
 */
router.get('/login/:email/:password', 
  userController.login,
  (req, res) => {
    return res.sendStatus(200);
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
    return res.sendStatus(200);
  }
);

/**
 * Create a new user.
 * Middleware: validation -> ??? bcrypt + hash ??? -> userController.createUser
 * Params: N/A
 * Body: password, email
 * Return: new user information
 */
router.post('/signup', 
  validator.checkPassword(),
  validator.confirmPassword(),
  validator.checkEmail(),
  validator.validate,
  userController.createUser,
  (req, res) => {
    return res.sendStatus(201); // created
  }
)

/**
 * Update: password
 * Middleware: validate new password -> ??? bcrypt + hash ??? (oldPassword AND password) ->  userController.updatePassword
 * Params: N/A
 * Body: user_id, oldPassword (to validate), password 
 * Returns: 
 */
router.put('/password',
  validator.checkPassword(),    
  validator.validate,
  userController.updatePassword,
  (req, res) => {
    return res.sendStatus(200);
  }
)

/**
 * Update: email
 * Middleware: validate new email -> ??? bcrypt + hash ??? -> userController.updateEmail
 * Params: N/A
 * Body: user_id, password (to validate), email 
 * Returns: 
 */
router.put('/email',
  validator.checkEmail(),
  validator.validate,
  userController.updatePassword,
  (req, res) => {
    return res.sendStatus(200);
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
   return res.sendStatus(200);
 }
)

/**
 * Delete user -> should delete all other info
 * Middleware: ??? bcrypt + hash ??? -> userController.deleteUser
 * Params: N/A
 * Body: user_id, password (to authenticate deletion)
 * Returns:  
 */
router.delete('/', 
userController.deleteUser,
  (req, res) => {
    return res.sendStatus(200);
  }
)

module.exports = router;