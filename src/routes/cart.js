// ************ Require's ************
var express = require('express');
var router = express.Router();

// ************ Controller Require ************
const CartController = require('../controllers/CartController')

/* GET cart page. */
router.get('/', CartController.index);
router.post('/', CartController.add);
//router.get('/:id', CartController.viewCart);

module.exports = router;