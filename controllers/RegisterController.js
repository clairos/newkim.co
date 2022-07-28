const {validationResult} = require('express-validator')

const RegisterController = {
    index: (req, res) => {
        res.render('register');
    },
    // Create - form to create
    // Pag para criar um item
    creat: (req, res) => {
        res.render('create-form', {errors: []});
    },
    // Create - Method store
    // Cria o item
    //não retorna na página
    store: (req, res) =>{
        const errors = validationResult(req);
        if(errors.length){
            const formattedErrors = {}
            errors.forEach(error => {
                formattedErros[error.param] = error.msg;
            });
            return res.render('creat-form', {errors: formattedErrors})
            // res.render('form', {errors})
        }
    },
    //Update - form to edit
    //edita o produto/input
    edit: (req, res)=> {
        const {id} = req.params;
        const product = Product.finOne(id);
        res.render('form')
    }
}

module.exports = RegisterController;