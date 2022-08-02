// ************ Require's ************
var express = require('express');
var router = express.Router();

// ************ Controller Require ************
const PaymentController = require('../controllers/PaymentController')

/* GET payment page. */
router.get('/', PaymentController.index);

module.exports = router;