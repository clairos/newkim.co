const fs = require('fs');
const path = require('path');
const { name } = require('ejs');
const { validationResult } = require('express-validator');
const { Login }= require('../models');
const bcrypt = require('../helpers/bcrypt');
const { json } = require('express');

const LoginController = {
    // VALIDAÇÃO LOGIN //
    loginIndex: (req, res) => {
        res.render('login');
    },

    auth: async (req, res) => {
        res.clearCookie('user');
        // res.clearCookie('admin');

        const { email, password } = req.body;
        const userAuth = await Login.findOne({
            where: {
                email
            }
        })
        
        console.log(userAuth);

        if (!userAuth) {
            res.render('login', {
                title: "Login | Minjukim",
                user: req.cookies.user,
                old: req.body,
                error: {
                    message: "Invalid credentials"
                }
            });

            return
        }

        if (!bcrypt.compareSync(password, userAuth.password)) {
            res.render('login', {
                title: "Login | Minjukim",
                user: req.cookies.user,
                old: req.body,
                error: {
                    message: "Invalid credentials"
                }
            });

            return
        }
        
        req.session.email = userAuth.email;
        res.cookie("user", userAuth);
        // res.cookies("admin", user.admin);

        res.redirect("/profile");
    },
    
    logout: (req, res) => {
        req.session.destroy();
        res.clearCookie("user");
        // res.clearCookie("admin");
        res.redirect("/home");

    }
}

module.exports = LoginController;