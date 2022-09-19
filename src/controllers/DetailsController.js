const { Products } = require('../models');

const DetailsController = {
    index: async (req, res) => {
        const { id } = req.params;
        const product = await Products.findByPk(id);
        
        res.render('details', { product });
    }
}

module.exports = DetailsController;