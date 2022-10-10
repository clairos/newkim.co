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
            const { profile_name,
                     email, 
                     password, 
                     country, 
                     shipping_first_name,
                     shipping_last_name,
                     address_line1, 
                     address_line2, 
                     suburb_city, 
                     state_territory, 
                     postcode, 
                     phone, 
                     emailOption 
                    } = req.body;

            let newUser = {
                profile_name, 
                email, 
                password: bcrypt.generateHash(password), //cripto.. senha
                country, 
                shipping_first_name,
                shipping_last_name,
                address_line1,
                address_line2, 
                suburb_city, 
                state_territory,
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