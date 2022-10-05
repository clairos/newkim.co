const fs = require('fs');
const path = require('path');
const { name } = require('ejs');
const { validationResult } = require('express-validator');
const { Register, Cart } = require('../models');
const bcrypt = require('../helpers/bcrypt');

const RegisterController = {
    register: (req, res) => {
        res.render('register', { user: req.cookies.user, errors: [], old: {} });
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
            const { FullName, email, password, country, addressLine, suburb, state, postcode, phone, emailOption } = req.body;

            let newUser = {
                fullName, 
                email, 
                password: bcrypt.generateHash(password), //cripto.. senha
                country, 
                firstName,
                lastName,
                address,
                address2, 
                suburb, 
                state,
                postcode,
                phone,
                emailOption,
                createdAt: new Date(),
                updatedAt: new Date()
            };

            const user = await Register.create(newUser);

            await Cart.create({ id_client: user.id_client });

            res.redirect('login')
        }
    },
   
}

module.exports = RegisterController;