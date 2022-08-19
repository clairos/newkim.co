const { validationResult } = require('express-validator');
const Products = require('../models/Login');
const Register = require('../models/Register');

const LoginController = {
    index: (req, res) => {
        res.render('login');
    },

    auth: (req, res) => {
    //VALIDAÇÃO LOGIN //
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
        
        res.redirect("/profile");
    }
  // Processamento do deslogar
//   logout: (req, res) => {
//     req.session.destroy();
//     res.clearCookie("user");
//     res.clearCookie("admin");
//     res.redirect("/");
//     }
}
}

module.exports = LoginController;