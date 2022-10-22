const { check, validationResult } = require('express-validator');

const checkUsername = () => {
  return [
    check('username')
      .trim()
      .isLength( { min: 8, max: 15 } )
      .withMessage('username must be a minimum of 8 characters')
  ]
}

const checkPassword = (req) => {
  return [
    check('password')
      .trim()
      .isLength({ min: 8, max: 15 })
      .withMessage('your password should be between 8-15 characters')
      .matches(/\d/)
      .withMessage('your password shoudl have at least one number')
      .matches(/[!@#$%^&*(),.?":{}|<>]/)
      .withMessage('your password shoudl have at least one special character')
  ]
};

const confirmPassword = (req) => {
  return [ 
    check('confirmPassword').custom((value, { req }) =>{
      if(value !== req.body.password) {
        console.log(req.body.password, req.body.confirmPassword);
        throw new Error('confirm password does not match');
      }
      return true;
    })
  ]
};

const checkEmail = (req) =>{
  return [ 
    check('email')
      .trim()
      .isEmail()
      .withMessage('invalid email address')
      .normalizeEmail()
  ];
}


const validate = (req, res, next) => {
  console.log('validating');
  const errors = validationResult(req);
  console.log(errors);
  if(!errors.isEmpty())
    return res.status(422).json({errors: errors.array()});
  next();
};

module.exports = {
  checkUsername,
  checkPassword,
  confirmPassword,
  checkEmail,
  validate
}