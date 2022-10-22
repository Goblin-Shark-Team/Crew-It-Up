const express = require('express');
const userController = require('../controllers/userController');
const validator = require('../validators/userValidator');

const router = express.Router(); // create our router
/**
 * Search for a username and password combination
 * Params: username, password
 * Body: N/A
 * Return: user profile information from database
 */
router.get('/:username/:password', 

  (req, res) => {
    return res.sendStatus(200);
  }
);

/**
 * Create a new user.
 * Validation: checks username, password, confirmPassword, and email
 * Params: N/A
 * Body: username, password, email
 */
router.post('/', 
  validator.checkUsername(),
  validator.checkPassword(),
  validator.confirmPassword(),
  validator.checkEmail(),
  validator.validate,
  (req, res) => {
    return res.sendStatus(200);
  }
)

/**
 * Update critical user info.
 * Params: N/A
 * Body: user_id, username, password, new email
 *       firstname, lastname, city, state, zipcode
 * ****** If it is present on the request body, it will be updated, ******
 * ****** please do not include placeholder keys with empty values. ******
 */
router.put('/',
  (req, res) => {
    return res.sendStatus(200);
  }
)

/**
 * Update user profile info.
 * Params: N/A
 * Body: 
 */

/**
 * Delete user. Can we get photos to delete automatically using postgres?
 * Params: N/A
 * Body: user_id, password (to authenticate deletion)
 */
router.delete('/', 
  (req, res) => {
    return res.sendStatus(200);
  }
)

module.exports = router;