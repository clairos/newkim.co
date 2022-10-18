const { Login, Products, Cart, Cart_Products, Client } = require('../models');
const viewCart =  async (email) => {
    const client = await Client.findOne({ where: { email }});        
    const cart = await Cart.findOne({ where: { id_client: client.id_client }});
    const cartProducts = await Cart_Products.findAll({ where: { id_cart: cart.id_cart}, include: { model: Products, required: true, as: 'product'}})
    
    return cartProducts;
}

const PaymentController = {
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
        res.render('payment', { cart });
    }
}

module.exports = PaymentController;