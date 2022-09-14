// ************ Require's ************
var express = require('express');
var router = express.Router();

// ************ Controller Require ************
const TrackCodeController = require('../controllers/TrackCodeController')

/* GET track code page. */
router.get('/', TrackCodeController.index);

module.exports = router;