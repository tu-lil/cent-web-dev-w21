let express = require('express');
let router = express.Router();

let indexController = require('../controllers/index');

/* process submission from user login page. */
router.post('/login',  indexController.processLoginPage);

// /* GET user registration page. */
// router.get('/register',  indexController.displayRegisterPage);

/* POST from user registration page. */
router.post('/register',  indexController.processRegisterPage);

/* perform user logout. */
router.get('/logout',  indexController.performLogout);

module.exports = router;
