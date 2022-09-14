// ************ Require's ************
const express = require('express');
const router = express.Router();
const loginValidator = require('../middlewares/loginValidator');

// ************ Controller Require ************
const LoginController = require('../controllers/LoginController');

/* GET login page. */
router.get('/', LoginController.loginIndex);
/* POST login page. */
router.post('/', LoginController.auth);


module.exports = router;