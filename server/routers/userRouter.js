const express = require('expres');
const router = express.Router();


/**
 * Search for a username and password combination.
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
 * Params: N/A
 * Body: username, password, email
 */
router.post('/', 
  (req, res) => {
    return res.sendStatus(200);
  }
)

/**
 * Update user information.
 * Params: N/A
 * Body: current username, new username, new password, new email
 *       firstname, lastname, city, state, zipcode
 */
router.put('/',
  (req, res) => {
    return res.sendStatus(200);
  }
)

/**
 * Delete user. Can we get photos to delete automatically using postgres?
 * Params: N/A
 * Body: username, password (to authenticate)
 */
router.delete('/', 
  (req, res) => {
    return res.sendStatus(200);
  }
)

module.exports = router;