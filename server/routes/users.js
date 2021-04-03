let express = require('express');
let router = express.Router();

let usersController = require('../controllers/users');

/* process submission from user login page. */
router.post('/login',  usersController.processLoginPage);

/* GET user registration page. */
router.get('/register',  usersController.displayRegisterPage);

/* POST from user registration page. */
router.post('/register',  usersController.processRegisterPage);

/* perform user logout. */
router.get('/logout',  usersController.performLogout);

module.exports = router;
