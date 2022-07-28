// ************ Require's ************
var express = require('express');
var router = express.Router();

// ************ Controller Require ************
const ForgotPasswordController = require('../controllers/ForgotPasswordController')

/* GET forgot password page. */
router.get('/', ForgotPasswordController.index);

module.exports = router;