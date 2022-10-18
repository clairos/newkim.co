// ************ Require's ************
const { Router } = require('express');
var express = require('express');
var router = express.Router();

// ************ Controller Require ************
const ProfileController = require('../controllers/ProfileController');
const guestMiddleware = require('../middlewares/guest');

/* GET profile page. */
router.get('/', guestMiddleware, ProfileController.index);
router.post('/', guestMiddleware, ProfileController.index);

module.exports = router;