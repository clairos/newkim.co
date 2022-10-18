const crypto = require('crypto');

const OrderSuccessController = {
   index: (req, res) => {
      const code = crypto.randomBytes(5).toString("hex");
      const orderCode = code.toUpperCase();

      res.render('orderSuccess', { orderCode });
   }
}

module.exports = OrderSuccessController;