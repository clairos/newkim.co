const fs = require('fs');
const path = require('path');
const { name } = require('ejs');
const { validationResult } = require('express-validator');
const Register = require('../models/Register');
const bcrypt = require('../helpers/bcrypt');

const RegisterController = {
    register: (req, res) => {
        res.render('register', { user: req.cookies.user, errors: [] });
    },

    save (req, res) {
        const user = req.body;
        const errors = [];
    },
    // Create - form to create
    // Pag para criar um item
    create: (req, res) => {
        res.render('register', {errors: []});
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
            })
        } else {
            //caminho para data
            const userJson = fs.readFileSync(
                path.join(__dirname, "..", "data", "register.json"),
                "utf-8"
                );
            //converter o arquivo de cima    
            const users = JSON.parse(userJson) //converte os dados enviados pelos usuarios em objeto   

            const { FullName, email, password, country, adressLine, suburb, state, postcode, phone, emailOption } = req.body;
            const newId = users[users.length -1].id +1

            let newUser = {
                id: newId, //vai somar o ultimo id com +1
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
            users.push(newUser)
            
            fs.writeFileSync(                
                path.join(__dirname, "..", "data", "register.json"),
                JSON.stringify(users) //converte os novos cadastros em uma sequencia
            )

            res.redirect('login')
        }
    },
    
    //Update - form to edit
    //edita o produto/input
    // edit: (req, res)=> {
        // const {id} = req.params;
        // const product = Product.finOne(id);
        // res.render('form')
    // }
   
}

module.exports = RegisterController;