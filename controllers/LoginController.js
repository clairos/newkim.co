const { validationResult } = require('express-validator');
const Products = require('../models/Login');

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

        const loginFound = User.find(userReceived.email);

        console.log(userFound);
        if(!userFound) {
            errors.push({ msg: 'Login inválido' });
            return res.render('store', { errors, user: userReceived });
        }

        const samePassword = User.comparePassword(loginReceived.password, loginFound.re_password);

        if (!samePassword) {
            errors.push({ msg: 'Login inválido' });
            return res.render('store', { errors, user: userReceived });
        }

        req.session.user = userReceived;

        return res.redirect('store');
    },
}

module.exports = LoginController;