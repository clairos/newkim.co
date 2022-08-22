const fs = require('fs');
const path = require('path');
const { name } = require('ejs');
const {validationResult} = require('express-validator');
const Register = require('../models/Register');
const bcrypt = require('../helpers/bcrypt');

const LoginController = {
    // VALIDAÇÃO LOGIN //
loginIndex: (req, res) => {
    res.render('login');
},

auth: (req, res) => {
    res.clearCookie('user');
    // res.clearCookie('admin');

    const usersJson = fs.readFileSync(
        path.join(__dirname, "..", "data", "register.json"),
        "utf-8" // caminho para acessar o db
    );

    const users = JSON.parse(usersJson);
        // console.log(users)
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
        res.render('login', {
            title: "Faça Login | Mijukim",
            user: req.cookies.user,
            old: req.body,
            error: {
                message: "Email or password required"
            }
        });
        return
    }  
        //Filtra as chaves que o objeto irá ter
    const user = JSON.parse(
    JSON.stringify(userAuth, ["id", "FullName", "password", "admin"])
    );
    req.session.email = userAuth.email;
    res.cookie("user", user);
    // res.cookie("admin", user.admin);
    
    res.redirect("/profile");
},
// Processamento do deslogar
logout: (req, res) => {
req.session.destroy();
res.clearCookie("user");
// res.clearCookie("admin");
res.redirect("/home");

}
}

module.exports = LoginController;