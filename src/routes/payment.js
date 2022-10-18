// ************ Require's ************
const express = require('express');
const router = express.Router();
// ************ Controller Require ************
const PaymentController = require('../controllers/PaymentController')

/* GET payment page. */
router.get('/', PaymentController.index);

module.exports = router;