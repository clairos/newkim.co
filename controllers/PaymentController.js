const Products = require('../models/Products');

const PaymentController = {
    index: (req, res) => {
        res.render('payment');
    }
}

module.exports = PaymentController;