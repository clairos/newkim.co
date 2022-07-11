var express = require('express');
var router = express.Router();
const FormController = require('../controllers/FormController')

/* GET form page. */
router.get('/', FormController.index);

module.exports = router;