const {check, body} = require('express-validator');

const validator = [
    check('email').notEmpty().withMessage('Email required').isEmail(),
    check('password').notEmpty().isLength({ min: 6, max: 12 }).withMessage('Senha deve conter no min 6, max 12 caracteres'),
    check('country').notEmpty().withMessage('Country/region required'),
    check('profile_name').notEmpty().withMessage('Name required'),
    check('shipping_first_name').notEmpty().withMessage('Fist Name required'),
    check('shipping_last_name').notEmpty().withMessage('Last Name required'),
    check('address_line1').notEmpty().withMessage('Address Line 1 required'),
    check('suburb_city').notEmpty().withMessage('Suburb required'),
    check('state_territory').notEmpty().withMessage('Country/region required'),
    check('postcode').notEmpty().withMessage('Postcode required'),
    check('phone').notEmpty().isLength({ min: 11, max: 11 }).withMessage("Phone incorret")
];    

module.exports = validator;