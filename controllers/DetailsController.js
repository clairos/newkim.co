const Products = require('../models/Products');

const DetailsController = {
    index: (req, res) => {
        const { id } = req.params;
        const product = Products.findOne(id);
        console.log(product)
        
        res.render('details', { product });
    }
}

module.exports = DetailsController;