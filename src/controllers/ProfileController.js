const Products = require('../models/Products');

const ProfileController = {
    index: (req, res) => {
        res.render('profile');
    }
}

module.exports = ProfileController;