const fs = require('fs');
const path = require('path');
const { name } = require('ejs');
const {validationResult} = require('express-validator');
const Register = require('../models/Register');
const bcrypt = require('bcryptjs');

const RegisterController = {
    index: (req, res) => {
        res.render('register', { errors: [] });
    },
    // Create - form to create
    // Pag para criar um item
    creat: (req, res) => {
        res.render('create-form', {errors: []});
    },
    // Create - Method store
    // Cria o item
    //não retorna na página
    store: async function(req, res) {
        const errors = validationResult(req);
        console.log(errors)
        if (!errors.isEmpty()) {
            res.render("register", {
                errors: errors.mapped(),
                old: req.body,
            });
        } else {
            const { FullName, email, password, country, adressLine, suburb, state, postcode, phone } = req.body;
            let hash = bcrypt.hashSync(password, 10);
            // let usuarioCadastrado = await Register.store({
                
            //     FullName: FullName, 
            //     email: email, 
            //     password: hash, 
            //     country: country, 
            //     adressLine: adressLine, 
            //     suburb: suburb, 
            //     state: state,
            //     postcode: postcode,
            //     phone: phone
            // });
            res.redirect('login')
        }
    }
    
    //Update - form to edit
    //edita o produto/input
    // edit: (req, res)=> {
        // const {id} = req.params;
        // const product = Product.finOne(id);
        // res.render('form')
    // }
}

module.exports = RegisterController;