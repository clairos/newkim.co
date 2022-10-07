// ************ Require's ************
const { Router } = require('express');
var express = require('express');
var router = express.Router();

// ************ Controller Require ************
const CartController = require('../controllers/CartController');
const guestMiddleware = require('../middlewares/guest');

/* GET cart page. */
router.get('/', guestMiddleware, CartController.index);
router.post('/', guestMiddleware, CartController.add);

/* PUT cart page. */
router.post('/', guestMiddleware, CartController.index);
router.put('/:id', guestMiddleware, CartController.update);

/* DELETE cart page. */
router.post('/', guestMiddleware, CartController.index);
router.delete('/:id', guestMiddleware, CartController.destroy);


module.exports = router;