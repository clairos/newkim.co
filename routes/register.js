// ************ Require's ************
const express = require('express');
const upload = require('../middlewares/multer');
const registerValidator = require('../middlewares/registerValidator');
const router = express.Router();

// ************ Controller Require ************
const RegisterController = require('../controllers/RegisterController');

/* GET form page. */
router.get('/', RegisterController.index);
/* POST form page. */
router.post('/registrar', registerValidator, RegisterController.store)

module.exports = router;