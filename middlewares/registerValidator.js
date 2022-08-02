const {check, body} = require('express-validator');

const validator = [
    check('email').notEmpty().withMessage('e-mail required').isEmail(),
    check('country').notEmpty().withMessage('Country/region required'),
    check('FullName').notEmpty().withMessage('Name required'),
    check('address').notEmpty().withMessage('Adress Line 1 required'),
    check('suburb').notEmpty().withMessage('Suburb required'),
    check('state').notEmpty().withMessage('Country/region required'),
    check('postcode').notEmpty().withMessage('Postcode required'),
    check('phone').notEmpty().withMessage('Phone required').isLength({ min: 11, max: 11 }).withMessage("Phone incorret"),

    
];    

module.exports = validator;