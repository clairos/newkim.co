const { Login, Products, Cart, Cart_Products, Clients } = require('../models');

const CartController = {
    index: async (req, res) => {
        const client = await Login.findOne({
            where: {
                email: req.cookies.user.email
            }
        })

        if (!client){
            res.redirect('/login');
        }

        const newCart = await Cart.create({
            id_client: client.id_client
        })

        const products = await Products.findAll();

        res.render('cart', { products, cart: newCart });
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
    },

    add: async (req, res) => {
        const clientEmail = req.session.email;
        const client = await Clients.findOne({ where: { email: clientEmail }});   
        const product = await Products.findByPk(req.body.productId);
        const cart = await Cart.findOne({ where: { id_client }});
        
        if (product) {
            const newCartProduct = await Cart_Products.create({
                id_product: product.productId,
                id_cart: cart.cartId,
                quantity: 1,
                size: req.body.size
            })
        }

        res.redirect('/cart/' + cart.cartId);
    },

    viewCart: async (req, res) => {
        const clientEmail = req.session.email;
        const client = await Clients.findOne({ where: { email: clientEmail }});        
        const cart = await Cart.findOne({ where: { id_client }});
        const cartProducts = await Cart_Products.findAll({ where: { id_cart: cart.id_cart}})
        
        res.render('cart', { products: cartProducts, cart });
    }
}

module.exports = CartController;
