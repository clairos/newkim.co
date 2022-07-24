const {check, body} = require('express-validator');

const validator = [
    body('email').notEmpty().withMessage('e-mail required').isEmail(),
    check('country/region').notEmpty().withMessage('Country/region required'),
    check('firtsName').notEmpty().withMessage('Firt name required'),
    check('lastName').notEmpty().withMessage('Last name required'),
    check('adressLine').notEmpty().withMessage('Adress Line 1 required'),
    check('suburb').notEmpty().withMessage('Suburb required'),
    check('country/region').notEmpty().withMessage('Country/region required'),
    check('postcode').notEmpty().withMessage('Postcode required'),
    check('phone').notEmpty().withMessage('Phone required').isLength({ min: 11, max: 11 }).withMessage("Phone incorret")
    
];    
    module.exports = validator;
