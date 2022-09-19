const { Products } = require('../models');

const CartController = {
    index: async (req, res) => {
        const products = await Products.findAll();

        res.render('cart', { products });
    },

    listProducts: async (req, res) => {
        // console.log(req.query);
        let product = req.body
        await Products.push(Products);

        res.redirect('/')
    },

    product: async (req, res) => {
        const productId = req.params.id
        const product = await Products.findAll(s => { return s.id == productId });

        res.render('productId', { productId: product, title: 'Products' })
    }
}

module.exports = CartController;