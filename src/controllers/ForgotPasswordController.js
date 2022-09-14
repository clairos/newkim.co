const Products = require('../models/Products');

const ForgotPasswordController = {
    index: (req, res) => {
        res.render('forgotPassword');
    }
}

module.exports = ForgotPasswordController;