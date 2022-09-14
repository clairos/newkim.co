const { Product } = require('../models');

const HomeController = {
    index: async (req, res) => {
        const products = await Product.findAll();
        console.log(products)
        res.render('home', { products });
    }    
}

module.exports = HomeController;