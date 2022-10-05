const { Login, Products, Cart, Cart_Products, Client } = require('../models');

    const viewCart =  async (email) => {
    const client = await Client.findOne({ where: { email }});        
    const cart = await Cart.findOne({ where: { id_client: client.id_client }});
    const cartProducts = await Cart_Products.findAll({ where: { id_cart: cart.id_cart}, include: { model: Products, required: true, as: 'product'}})
    
    return cartProducts;
    }
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

        const cart = await viewCart(req.cookies.user.email);
        
        res.render('cart', { cart });
        
    },

    listProducts: async (req, res) => {
        // console.log(req.query);
        let product = req.body
        await Products.push(Products);

        res.redirect('/')
    },

    product: async (req, res) => {
        const productId = req.params.id
        const product = await Products.findAll(product => { return product.id == productId });

        res.render('productId', { productId: product, title: 'Products' })
    },

    add: async (req, res) => {
        const clientEmail = req.cookies.user.email;
        const client = await Client.findOne({ where: { email: clientEmail }});  
        const product = await Products.findByPk(req.body.productId);
        const cart = await Cart.findOne({ where: { id_client: client.id_client }});
        console.log("body", req.body);
        
        if (product) {
            await Cart_Products.create({
                id_product: product.id_product,
                id_cart: cart.id_cart,
                quantity: 1,
                size: req.body.size
            })
        }
        const cartData = await viewCart(req.cookies.user.email);

        //console.log(cart);
        //res.json(cartData);
        res.render('cart', { cart: cartData });
    },

    update: async (req,res) => {
        const clientEmail = req.cookies.user.email;
        const client = await Client.findOne({ where: { email: clientEmail }});  
        const product = await Products.findByPk(req.body.productId);
        const cart = await Cart.findOne({ where: { id_client: client.id_client }});

        if (product) {
            await Cart_Products.update({
                quantity: req.body.quantity,
                size: req.body.size
            })
        }
        const cartData = await viewCart(req.cookies.user.email);

        res.render('cart', { cart: cartData });
    },

    destroy: async (req,res) => {
        const clientEmail = req.cookies.user.email;
        const client = await Client.findOne({ where: { email: clientEmail }});  
        const product = await Products.findByPk(req.body.productId);
        const cart = await Cart.findOne({ where: { id_client: client.id_client }});

        if (product) {
            await Cart_Products.destroy({
                id_product: product.id_product,
                quantity: 1,
                size: req.body.size
            })
        }
        const cartData = await viewCart(req.cookies.user.email);

        res.render('cart', { cart: cartData });
    }
}

module.exports = CartController;
