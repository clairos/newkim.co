// ************ Require's ************
var express = require('express');
var router = express.Router();

// ************ Controller Require ************
const CartController = require('../controllers/CartController');
const guestMiddleware = require('../middlewares/guest');

/* GET cart page. */
router.get('/', guestMiddleware, CartController.index);
router.post('/', guestMiddleware, CartController.add);
//router.get('/:id', CartController.viewCart);

module.exports = router;