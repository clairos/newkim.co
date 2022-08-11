const { validationResult } = require('express-validator');
const Products = require('../models/Login');
const Register = require('../models/Register');

const LoginController = {
    index: (req, res) => {
        res.render('login');
    },

    // login: (req, res) => {
    //     const errors = validationResult(req);

    //     if(!errors.isEmpty()) {
    //         return res.status(400).json({
    //             success: false,
    //             errors: errors.array()
    //         });
    //     }

    //     res.status(200).json({
    //         success: true,
    //         message: 'Login sucessful'
    //     });

    //     return res.redirect('store');

    // },
    
    auth (req, res) {
        const loginReceived = req.body;
        const errors = [];

        const loginFound = Register.find(registerReceived.email);

        console.log(registerFound);
        if(!registerFound) {
            errors.push({ msg: 'Login inválido' });
            return res.render('store', { errors, register: registerrReceived });
        }

        const samePassword = registerr.comparePassword(loginReceived.password, loginFound.re_password);

        if (!samePassword) {
            errors.push({ msg: 'Login inválido' });
            return res.render('store', { errors, register: registerReceived });
        }

        req.session.register = registerReceived;

        return res.redirect('store');
    },
}

module.exports = LoginController;