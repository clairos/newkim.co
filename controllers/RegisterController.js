const fs = require('fs');
const path = require('path');
const { name } = require('ejs');
const {validationResult} = require('express-validator');
const Register = require('../models/Register');
const bcrypt = require('../helpers/bcrypt');

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
            //caminho para data
            const userJson = fs.readFileSync(
                path.join(__dirname, "..", "data", "register.json"),
                "utf-8"
                );
            //converter o arquivo de cima    
            const users = JSON.parse(userJson)    

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
                JSON.stringify(users)
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
    loginIndex: (req, res) => {
        res.render('login');
    },

    loginAuth: (req, res) => {
        res.clearCookie('user');
        res.clearCookie('admin');

        const usersJson = fs.readFileSync(
            path.join(__dirname, "..", "data", "users.json"),
            "utf-8"
        );

        const users = JSON.parse(usersJson);

        const { email, password } = req.body;
        const userAuth = users.find((user) => {
            if (user.email === email) {
                if (bcrypt.compareSync(password, user.password)){
                    return true;
                }
                // O if de cima é a mesma coisa da linha abaixo
        // return bcrypt.compareHash(senha, user.senha);
            }
        });

        if (!userAuth) {
            return res.render('login', {
                title: "Faça Login | Mijukim",
                user: req.cookies.user,
                old: req.body,
                error: {
                    message: "Email or password required"
                }
            });
        }  
            //Filtra as chaves que o objeto irá ter
        const user = json.parse(
        JSON.stringify(userAuth, ["id", "FullName", "password", "admin"])
        );
        req.session.email = userAuth.email;
        res.cookie("user", user);
        res.cookie("admin", user.admin);
        
        res.redirect("/");
    },
  // Processamento do deslogar
  logout: (req, res) => {
    req.session.destroy();
    res.clearCookie("user");
    res.clearCookie("admin");
    res.redirect("/");
    }
}

module.exports = RegisterController;