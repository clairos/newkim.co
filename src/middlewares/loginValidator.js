const { check, validationResult } = require('express-validator');


const loginValidator = [
    check('email').notEmpty().withMessage('e-mail required').isEmail(),
    check('password').notEmpty().isLength().withMessage('Password required')
];

module.exports = loginValidator;