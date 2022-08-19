const {validationResult} = require('express-validator');
const Register = require('../models/Register');

const RegisterController = {
    register: (req, res) => {
        res.render('register', { errors: [] });
    },

    save (req, res) {
        const user = req.body;
        const errors = [];

        
    },
    // // Create - form to create
    // // Pag para criar um item
    // creat: (req, res) => {
    //     res.render('create-form', {errors: []});
    // },
    // // Create - Method store
    // // Cria o item
    // //não retorna na página
    // store: (req, res) =>{
    //     const register = req.body;
    //     const errors = [];

    //     if(!register.name || !register.email || !register.password || !register.country || !register.adressLine || !register.suburb || !register.state || !register.postcode || !register.phone){
    //         errors.push({msg: 'Login required'});
    //         console.log('errors', errors);
    //         return res.render('register', {errors, register});
    //     }

    //     Register.store(register);
    //     res.redirect('login');
        // const errors = validationResult(req);
        // if(errors.length){
        //     const formattedErrors = {}
        //     errors.forEach(error => {
        //         formattedErros[error.param] = error.msg;
        //     });
        //     return res.render('creat-form', {errors: formattedErrors})
        //     res.render('form', {errors})
        // }
    // },
    //Update - form to edit
    //edita o produto/input
    // edit: (req, res)=> {
    //     // const {id} = req.params;
    //     // const product = Product.finOne(id);
    //     // res.render('form')
    // }
}

module.exports = RegisterController;