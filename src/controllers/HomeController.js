const Products = require('../models/Products');

const HomeController = {
    index: (req, res) => {
        const products = Products.findAll();
        res.render('home', { products });
    }    
}

module.exports = HomeController;