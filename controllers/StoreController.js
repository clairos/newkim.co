const Products = require('../models/Products');

const StoreController = {
    index: (req, res) => {
        const products = Products.findAll();
        res.render('store', { products });
    },
    collection: (req, res) => {
        const products = Products.findOne();
        res.render('store', { products });
    }, 
}


module.exports = StoreController;