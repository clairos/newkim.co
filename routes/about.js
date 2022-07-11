var express = require('express');
var router = express.Router();
const AboutController = require('../controllers/AboutController')

/* GET about page. */
router.get('/', AboutController.index);

module.exports = router;