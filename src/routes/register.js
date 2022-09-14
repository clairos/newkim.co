// ************ Require's ************
const express = require('express');
const upload = require('../middlewares/multer');
const registerValidator = require('../middlewares/registerValidator');
const router = express.Router();

// ************ Controller Require ************
const RegisterController = require('../controllers/RegisterController');

/* GET register page. */
router.get('/', RegisterController.register);
/* POST form page. */
router.post('/', registerValidator, RegisterController.store);

module.exports = router;