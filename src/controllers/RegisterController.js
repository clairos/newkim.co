const fs = require('fs');
const path = require('path');
const { name } = require('ejs');
const { validationResult } = require('express-validator');
const { Register } = require('../models');
const bcrypt = require('../helpers/bcrypt');

const RegisterController = {
    register: (req, res) => {
        res.render('register', { user: req.cookies.user, errors: [] });
    },

    create: (req, res) => {
        res.render('register', {errors: []});
    },
    
    store: async function(req, res) {
        const errors = validationResult(req);
        console.log(errors)

        if (!errors.isEmpty()) {
            res.render("register", {
                errors: errors.mapped(),
                old: req.body,
            })
        } else {
            const { FullName, email, password, country, adressLine, suburb, state, postcode, phone, emailOption } = req.body;

            let newUser = {
                FullName, 
                email, 
                password: bcrypt.generateHash(password), //cripto.. senha
                country, 
                adressLine, 
                suburb, 
                state,
                postcode,
                phone,
                emailOption,
                creadoEm: new Date(),
                modificadoEm: new Date()
            };

            await Register.create(newUser);

            res.redirect('login')
        }
    },
   
}

module.exports = RegisterController;