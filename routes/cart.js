var express = require('express');
var router = express.Router();
const CartController = require('../controllers/CartController')

/* GET cart page. */
router.get('/', CartController.index);

module.exports = router;