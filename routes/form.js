// ************ Require's ************
const express = require('express');
const upload = require('../middlewares/multer');
const formValidator = require('../middlewares/formValidator');
const router = express.Router();

// ************ Controller Require ************
const FormController = require('../controllers/FormController');

/* GET form page. */
router.get('/', FormController.index);
/* POST form page. */
router.post('/registrar', formValidator, FormController.store)

module.exports = router;