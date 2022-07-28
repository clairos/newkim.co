// ************ Require's ************
var express = require('express');
var router = express.Router();

// ************ Controller Require ************
const LoginController = require('../controllers/LoginController')

/* GET login page. */
router.get('/', LoginController.index);

module.exports = router;