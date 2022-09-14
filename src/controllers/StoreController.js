const { Product } = require('../models');

const StoreController = {
    index: async (req, res) => { // LEMBRA DO ASYNC E AWAIT
        const products = await Product.findAll();

        res.render('store', { products });
    },
    collection: async (req, res) => {
        const { collection } = req.params;
        const products = await Product.findAll({
            where: {collection: collection}
        });

        res.render('store', { products });
    }, 
}


module.exports = StoreController;