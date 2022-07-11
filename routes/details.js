var express = require('express');
var router = express.Router();
const DetailsController = require('../controllers/DetailsController')

/* GET details page. */
router.get('/', DetailsController.index);

module.exports = router;