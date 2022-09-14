// ************ Require's ************
var express = require('express');
var router = express.Router();

// ************ Controller Require ************
const TrackOrderController = require('../controllers/TrackOrderController')

/* GET track order page. */
router.get('/', TrackOrderController.index);

module.exports = router;