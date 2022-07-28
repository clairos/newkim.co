const Products = require('../models/Products');

const LoginController = {
    index: (req, res) => {
        res.render('login');
    }
}

module.exports = LoginController;