// ************ Require's ************
var express = require('express');
var router = express.Router();

// ************ Controller Require ************
const ErrorController = require('../controllers/ErrorController')

/* GET Error page. */
router.get('/', ErrorController.index);

module.exports = router;