const { Products, Cart } = require('../models');

const DetailsController = {
    index: async (req, res) => {
        const { id } = req.params;
        const product = await Products.findByPk(id);
        // const cart = await Cart.findOne({
        //     where: { id_client: req.cookies.user.id }
        // })
        
        
        res.render('details', { product });
    }
}

module.exports = DetailsController;