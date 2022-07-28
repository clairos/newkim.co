// ************ Require's ************
var express = require('express');
var router = express.Router();

// ************ Controller Require ************
const EditUserController = require('../controllers/EditUserController')

/* GET payment page. */
router.get('/', EditUserController.index);

module.exports = router;