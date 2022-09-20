const { Products } = require('../models');

const HomeController = {
    index: async (req, res) => {
        const products = await Products.findAll();
        
        res.render('home', { products });
    }    
}

module.exports = HomeController;