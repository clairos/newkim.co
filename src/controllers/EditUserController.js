const Products = require('../models/Products');

const EditUserController = {
    index: (req, res) => {
        res.render('editUser');
    }
}

module.exports = EditUserController;