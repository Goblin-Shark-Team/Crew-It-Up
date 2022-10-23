const { check, validationResult } = require('express-validator');

const checkPasscode = () => {
  return [
    check('passcode')
      .trim()
      .isLength({ min: 8, max: 15 })
      .withMessage('your passcode should be between 8-15 characters')
      .matches(/\d/)
      .withMessage('your passcode should have at least one number')
      .matches(/[!@#$%^&*(),.?":{}|<>]/)
      .withMessage('your passcode should have at least one special character')
  ]
};

const confirmPasscode = () => {
  return [ 
    check('confirmPasscode').custom((value, { req }) =>{
      if(value !== req.body.passcode) {
        console.log(req.body.passcode, req.body.confirmPasscode);
        throw new Error('confirm password does not match');
      }
      return true;
    })
  ]
};

const checkEmail = () =>{
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
  checkPasscode,
  confirmPasscode,
  checkEmail,
  validate
}