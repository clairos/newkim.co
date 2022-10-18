const { Products, Cart } = require('../models');

const DetailsController = {
    index: async (req, res) => {
        let cart = {}
        const { id } = req.params;
        const product = await Products.findByPk(id);

        if (req.cookies.user) {
            cart = await Cart.findOne({
                where: { id_client: req?.cookies?.user }
            })
        }
        
        res.render('details', { product, cart });
    }
}

module.exports = DetailsController;