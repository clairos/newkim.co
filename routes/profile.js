// ************ Require's ************
var express = require('express');
var router = express.Router();

// ************ Controller Require ************
const ProfileController = require('../controllers/ProfileController')

/* GET profile page. */
router.get('/', ProfileController.index);

module.exports = router;