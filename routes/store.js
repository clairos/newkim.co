// ************ Require's ************
var express = require('express');
var router = express.Router();

// ************ Controller Require ************
const StoreController = require('../controllers/StoreController')

/* GET store page. */
router.get('/', StoreController.index);
router.get('/:collection', StoreController.index);

module.exports = router;