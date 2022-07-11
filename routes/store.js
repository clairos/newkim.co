var express = require('express');
var router = express.Router();
const StoreController = require('../controllers/StoreController')

/* GET store page. */
router.get('/', StoreController.index);

module.exports = router;