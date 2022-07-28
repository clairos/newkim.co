// ************ Require's ************
var express = require('express');
var router = express.Router();

// ************ Controller Require ************
const OrderSuccessController = require('../controllers/OrderSuccessController')

/* GET order success page. */
router.get('/', OrderSuccessController.index);

module.exports = router;