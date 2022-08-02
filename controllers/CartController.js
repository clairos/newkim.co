const Products = require('../models/Products');

const CartController = {
  index: (req, res) => {
    const products = Products.findAll();
     res.render('cart', {products});
  },
  listProducts: (req, res)=> {
    // console.log(req.query);
    let product = req.body
    Products.push(Products);
    res.redirect('/')
  },
  product: (req, res) =>{
    const productId= req.params.id 
    const product = Products.findAll(s => {return s.id == productId});
    res.render('productId', {productId: product, title: 'Products'})
  }
}

module.exports = CartController;