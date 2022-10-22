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
 * Update user information.
 * Params: user_id (to differentiate users with same username, different email)
 * Body: current username, new username, new password, new email
 *       firstname, lastname, city, state, zipcode
 */
router.put('/:user_id',
  (req, res) => {
    return res.sendStatus(200);
  }
)

/**
 * Delete user. Can we get photos to delete automatically using postgres?
 * Params: N/A
 * Body: password (to authenticate deletion)
 */
router.delete('/:user_id', 
  (req, res) => {
    return res.sendStatus(200);
  }
)

module.exports = router;